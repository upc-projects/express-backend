# INICIO REGISTRAR USUARIO

Feature: Registrar usuario
    As a user I need to register in order to manage my tasks

Scenario: Registrar usuario1
    Given user name is "empty"
    When 1 post method save user is "executed"
    Then 1 the user recieves the message "Email is required"

Scenario: Registrar usuario2
    Given user password is "empty"
    When 2 post method save users is "executed"
    Then 2 the user recieves the message "Password must not be empty"

Scenario: Registrar usuario3
    Given contraseña contiene menos de ocho caracteres y / o no contenga un "numero" 
    When 3 se ejecuta metodo post "guardar usuario"  
    Then 3 recibe el mensaje de error "Password must be at least 6 characters"

Scenario: Registrar usuario4
    Given ingresa los 3 campos "correctamente"
    When 4 se ejecuta metodo post "guardar usuario"
    Then 4 recibe response status 200 "created"

# FIN REGISTRAR USUARIO

# # INICIO RESGISTRAR TAREA

# Feature: Registrar tarea
#     As a user I need to register a task in order to manage my tasks

# Scenario: Eliminar tarea
#     Given nombre de tarea es vacio 
#     When se ejecuta metodo post "guardar tarea"
#     Then recibe el mensaje de error "Nombre de tarea es obligatorio"

# Scenario: Eliminar tarea
#     Given nombre de tarea tenga valor diferente a vacio 
#     When se ejecuta metodo post "guardar tarea"
#     Then recibe response status 201 "tarea guardada"

# # FIN REGISTRAR TAREA

# # INICIO ACTUALIZAR TAREA

# Feature: Actualizar tarea
#     As a user I need to update a task in order to manage my tasks

# Scenario: Actualizar tarea
#     Given estado de tarea ha cambiado
#     When se ejecuta metodo put "Actualizar tarea"
#     Then  recibe response status 201 "se guardo tarea"

# # FIN ACTUALIZAR TAREA

# # INICIO LISTAR TAREA

# Feature: Listar tarea
#     As a user I need to list a task in order to manage my tasks

# Scenario: Listar tarea
#     Given usuario existente con tareas asignadas
#     When se ejecuta metodo get "Listar tareas"
#     Then  recibe response status 200 "tareas obtenidas"

# Scenario: Listar tarea
#     Given usuario existente sin tareas asignadas
#     When se ejecuta metodo get "Listar tareas"
#     Then  recibe response status 200 "No hay tareas disponibles"

# # FIN LISTAR TAREA

# # INICIO ELIMINAR TAREAS

# Feature: Elimninar tareas
#     As a user I need to delete a task in order to manage my tasks

# Scenario: Elimninar tareas
#     Given usuario existente con tareas asignadas 
#     When hace click en "eliminar tarea"
#     Then recibe mensaje "¿Desea eliminar esta tarea?"

# Scenario: Elimninar tareas
#     Given mensaje "¿Desea eliminar esta tarea?""
#     When hace click en confirmar
#     And se ejecute metodo delete "eliminar tarea"
#     Then recibe response status 200 "tarea eliminada"

# # FIN ELIMINAR TAREAS  







