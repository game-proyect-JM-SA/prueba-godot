extends CharacterBody2D  # Para Godot 4

const SPEED = 100.0
const AIR_SPEED = 150.0  
const JUMP_FORCE = -300.0
const WALL_JUMP_FORCE_X = 350.0
const WALL_JUMP_FORCE_Y = -450.0
const GRAVITY = 800.0
const WALL_SLIDE_SPEED = 50.0
@onready var start_position = global_position
@onready var sprite = $AnimatedSprite2D  

var on_wall_side = 0  # -1 = pared izquierda, 1 = pared derecha, 0 = ninguna
var wall_jumping = false

func _physics_process(delta):
	# Si presionamos "R", reiniciamos la posición
	if Input.is_action_just_pressed("reset_position"):
		global_position = start_position
		velocity = Vector2.ZERO  # Detenemos cualquier movimiento
		
	# Aplicar gravedad normal
	velocity.y += GRAVITY * delta  

	# Detectar colisión con paredes
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
		velocity.y = min(velocity.y, WALL_SLIDE_SPEED)

	# Si no estamos haciendo wall jump, permitir movimiento normal
	if not wall_jumping:
		var direction = Input.get_axis("ui_left", "ui_right")
		
		# Aumentamos la velocidad si no estamos en el suelo
		if is_on_floor():
			velocity.x = direction * SPEED
		else:
			velocity.x = direction * AIR_SPEED  # Aumentamos la velocidad en el aire
		
		if direction != 0:
			sprite.flip_h = direction < 0

	# Wall Jump: si está en la pared pero NO en el suelo
	if on_wall_side != 0 and not is_on_floor() and Input.is_action_just_pressed("ui_up"):
		wall_jumping = true
		velocity.y = WALL_JUMP_FORCE_Y
		velocity.x = WALL_JUMP_FORCE_X * -on_wall_side
		sprite.play("wall_jump")
		await get_tree().create_timer(0.15).timeout
		wall_jumping = false

	# Salto normal desde el suelo
	elif is_on_floor() and Input.is_action_just_pressed("ui_up"):
		velocity.y = JUMP_FORCE

	# Cambiar animaciones
	if on_wall_side != 0 and not is_on_floor():
		sprite.play("wall")
	elif not is_on_floor():
		sprite.play("roll")
	elif velocity.x != 0:
		sprite.play("walk")
	else:
		sprite.play("idle")



	# Mover el personaje con colisiones
	move_and_slide()
