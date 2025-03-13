extends CharacterBody2D  # Para Godot 4

const SPEED = 69.0
const JUMP_FORCE = -300.0
const GRAVITY = 1100.0

@onready var sprite = $AnimatedSprite2D  # Asegúrate de que este nombre coincida con el nodo de la animación

func _ready():
	print(sprite)  # Esto imprimirá el nodo o `null` si no se encuentra
	if sprite == null:
		print("Error: No se encontró el nodo AnimatedSprite2D")

func _physics_process(delta):
	# Aplicar gravedad
	if not is_on_floor():
		velocity.y += GRAVITY * delta

	# Movimiento horizontal
	var direction = Input.get_axis("ui_left", "ui_right")
	velocity.x = direction * SPEED

	# Cambiar animación según el estado
	if not is_on_floor():
		sprite.play("roll")  # Asegúrate de tener una animación "jump"
	elif direction != 0:
		sprite.play("walk")  # Asegúrate de tener una animación "run"
	else:
		sprite.play("idle")  # Asegúrate de tener una animación "idle"

	# Voltear el sprite sin afectar la escala
	if direction != 0:
		sprite.flip_h = direction < 0

	# Salto
	if is_on_floor() and Input.is_action_just_pressed("ui_up"):
		velocity.y = JUMP_FORCE

	# Mover el personaje con colisiones
	move_and_slide()
