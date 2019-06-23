# # INICIO LISTAR TAREA

Feature: Listar tarea
    As a user I need to list a task in order to manage my tasks

Scenario: Listar tarea2
    Given usuario existente con "tareas asignadas"
    When 2 se ejecuta metodo get "Listar tareas"
    Then 2 recibe response status 200 "tareas obtenidas"

Scenario: Listar tarea3
    Given usuario existente sin "tareas asignadas"
    When 3 se ejecuta metodo get "Listar tareas"
    Then 3 recibe response status 400 "No hay tareas disponibles"


# FIN LISTAR TAREA