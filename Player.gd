extends CharacterBody2D  # Para Godot 4

const SPEED = 100.0
const JUMP_FORCE = -300.0
const WALL_JUMP_FORCE_X = 350.0  # Aumentamos el impulso horizontal
const WALL_JUMP_FORCE_Y = -350.0  # Aumentamos la fuerza del salto
const GRAVITY = 800.0
const WALL_SLIDE_SPEED = 50.0  # Velocidad de deslizamiento reducida en la pared

@onready var sprite = $AnimatedSprite2D  

var on_wall_side = 0  # -1 = pared izquierda, 1 = pared derecha, 0 = ninguna
var wall_jumping = false  # True cuando hacemos un wall jump

func _physics_process(delta):
	# Aplicar gravedad normal
	velocity.y += GRAVITY * delta  

	# Detectar colisión con pared
	on_wall_side = 0  # Reiniciar cada frame
	for i in range(get_slide_collision_count()):
		var collision = get_slide_collision(i)
		var normal = collision.get_normal()
		if normal.x > 0.5:  # Pared a la izquierda
			on_wall_side = -1
		elif normal.x < -0.5:  # Pared a la derecha
			on_wall_side = 1

	# Si estamos en una pared y cayendo, reducir la velocidad de caída
	if on_wall_side != 0 and not is_on_floor() and velocity.y > 0 and not wall_jumping:
		velocity.y = min(velocity.y, WALL_SLIDE_SPEED)  # Limitar la velocidad de caída

	# Si no estamos haciendo wall jump, permitir movimiento normal
	if not wall_jumping:
		var direction = Input.get_axis("ui_left", "ui_right")
		velocity.x = direction * SPEED
		if direction != 0:
			sprite.flip_h = direction < 0

	# Wall Jump: si está en la pared pero NO en el suelo
	if on_wall_side != 0 and not is_on_floor() and Input.is_action_just_pressed("ui_up"):
		wall_jumping = true  # Activar estado de wall jump
		velocity.y = WALL_JUMP_FORCE_Y
		velocity.x = WALL_JUMP_FORCE_X * -on_wall_side  # Impulso más fuerte y angular
		sprite.play("wall_jump")

		# Deshabilitar el control horizontal por un instante
		await get_tree().create_timer(0.15).timeout  # Aumentamos el tiempo de bloqueo para mayor distancia
		wall_jumping = false

	# Salto normal desde el suelo
	elif is_on_floor() and Input.is_action_just_pressed("ui_up"):
		velocity.y = JUMP_FORCE

	# Cambiar animaciones
	if on_wall_side != 0 and not is_on_floor():
		sprite.play("wall")  # Animación de "deslizarse por la pared"
	elif not is_on_floor():
		sprite.play("roll")  
	elif velocity.x != 0:
		sprite.play("walk")  
	else:
		sprite.play("idle")  

	# Mover el personaje con colisiones
	move_and_slide()
