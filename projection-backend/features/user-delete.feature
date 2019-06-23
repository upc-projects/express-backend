# INICIO ELIMINAR USUARIO

Feature: Eliminar usuario
    As a user I need to delete my account in order to stop using the application

Scenario: Eliminar usuario6
    Given mensaje "¿Seguro que desea eliminar su cuenta"
    When 7 se ejecuta metodo delete "eliminar usuario"
    Then 7 recibe response status 200 "User deleted"

# FIN ELIMINAR USUARIO