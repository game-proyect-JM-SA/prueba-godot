extends CharacterBody2D

const SPEED = 60.0  # Velocidad horizontal
const GRAVITY = 800.0  # Fuerza de gravedad
const JUMP_FORCE = -300.0  # Fuerza del salto
const MOVEMENT_RANGE = 50.0  # Distancia máxima de movimiento

@onready var sprite = $AnimatedSprite2D  # Nodo de animación
@onready var start_position = global_position  # Guarda la posición inicial

var direction = 1  # 1 = Derecha, -1 = Izquierda

func _physics_process(delta):
	# Aplicar gravedad
	velocity.y += GRAVITY * delta

	# Verificar si llegó al límite y dar media vuelta
	if abs(global_position.x - start_position.x) > MOVEMENT_RANGE:
		global_position.x = clamp(global_position.x, start_position.x - MOVEMENT_RANGE, start_position.x + MOVEMENT_RANGE)
		direction *= -1

	# Mover en la dirección actual
	velocity.x = direction * SPEED

	# Voltear sprite según la dirección
	sprite.flip_h = -direction < 0

	# Si choca con una pared y está en el suelo, saltar
	if is_on_wall() and is_on_floor():
		velocity.y = JUMP_FORCE

	# Cambiar animación según el estado
	if not is_on_floor():
		sprite.play("jump")  # Animación de salto
	else:
		sprite.play("walk")  # Animación de caminar

	move_and_slide()
