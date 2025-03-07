extends CharacterBody2D  # Para Godot 4

const SPEED = 69.0
const JUMP_FORCE = -400.0
const GRAVITY = 1600.0

@onready var sprite = $Sprite2D  # Asegúrate de que el nodo se llama "Sprite2D"

func _physics_process(delta):
	# Aplicar gravedad
	if not is_on_floor():
		velocity.y += GRAVITY * delta

	# Movimiento horizontal
	var direction = Input.get_axis("ui_left", "ui_right")
	velocity.x = direction * SPEED

	# Voltear el sprite sin afectar la escala
	if direction != 0:
		sprite.scale.x = abs(sprite.scale.x) * (-1 if direction < 0 else 1)

	# Salto
	if is_on_floor() and Input.is_action_just_pressed("ui_up"):
		velocity.y = JUMP_FORCE

	# Mover el personaje con colisiones
	move_and_slide()
