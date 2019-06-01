const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");
const userController = require('../../api/controllers/userController');

//REGISTRAR USUARIO

//Scenario: Registrar usuario1: username vacio

Given("user name is {string}", function(empty) { 
    this.setRequest(empty);
});

  When('1 post method save user is {string}', function(enzo) {

    const usuario = {
      body: {
          username: '',
          password: 'testing321',
          confirmPassword: 'testing321'
      }
    }

    this.setUsuario(usuario.body);

    this.setRes(400)

    try {
      userController.userRegister(usuario, this.getRes(), null);
      this.setMessage("Email is required");
    } catch (err) {
      console.log(err);
    }
  });

  Then('1 the user recieves the message {string}', function(expectedAnswer) {
    // console.log("mensajito", this.getMessage());
    expect(this.getMessage()).to.eql(expectedAnswer);
  });

// Scenario: Registrar usuario2: password vacio

Given("user password is {string}", function(empty) { 
    this.setRequest(empty)
});

  When('2 post method save users is {string}', function(diego) {
    const usuario = {
      body: {
          username: 'test@gmail.com',
          password: '',
          confirmPassword: ''
      }
    }

    this.setUsuario(usuario.body);

    this.setRes(400)

    try {
      userController.userRegister(usuario, this.getRes(), null);
      this.setMessage("Password must not be empty");
    } catch (err) {
      console.log(err);
    }
  });

  Then('2 the user recieves the message {string}', function(expectedAnswer) {
      expect(this.getMessage()).to.eql(expectedAnswer)
  });

// Scenario: Registrar usuario3: password formato incorrecto

Given("contraseña contiene menos de ocho caracteres y / o no contenga un {string}", function(empty) { 
  this.setRequest(empty)
});

    When('3 se ejecuta metodo post {string}', function(request) {
      const usuario = {
        body: {
            username: 'dominico@gmail.com',
            password: 'test',
            confirmPassword: 'test'
        }
      }
  
      this.setUsuario(usuario.body);
  
      this.setRes(400)
  
      try {
        userController.userRegister(usuario, this.getRes(), null);
        this.setMessage("Password must be at least 6 characters");
      } catch (err) {
        console.log(err);
      }
    });


    Then('3 recibe el mensaje de error {string}', function(expectedAnswer) {
        expect(this.getMessage()).to.eql(expectedAnswer)
    });


// Scenario: Registrar usuario4: Guarda al usuario correctamente

Given("ingresa los 3 campos {string}", function(full) {
  this.setRequest(full)
});

  When('4 se ejecuta metodo post {string}', function(enzo) {

    const usuario = {
      body: {
          username: 'dominico@gmail.com',
          password: 'testing321',
          confirmPassword: 'testing321'
      }
    }

    this.setUsuario(usuario.body);

    this.setRes(200)

    try {
      userController.userRegister(usuario, this.getRes(), null);
      this.setMessage("created");
    } catch (err) {
      console.log(err);
    }
  });

  Then('4 recibe response status 200 {string}', function(expectedAnswer) {
    expect(this.getMessage()).to.eql(expectedAnswer);
  });

// FIN REGISTRAR USUARIO

// INICIO ELIMINAR USUARIO

// Scenario: Eliminar usuario5: Elimina usuario

Given("mensaje {string}", function(message) {
    this.setRequest(message)
});

    When('5 se ejecuta metodo delete {string}', function(request) {
        const id = 109;

        this.setRes(200)

        try {
          userController.userDelete(id, this.getRes(), null);
          this.setMessage("User deleted");
        } catch (err) {
          console.log(err);
        }
    });

    Then('5 recibe response status 200 {string}', function(expectedAnswer) {
        expect(this.getMessage()).to.eql(expectedAnswer)
    });

// // FIN ELIMINAR USUARIO

// // INICIO RESGISTRAR TAREA

// Given("nombre de tarea es vacio", function(request) {
//     this.setTo(request)
// });

//     When('se ejecuta metodo post "guardar tarea"', function(request) {
//         console.log("procesando");
//     });

//     Then('recibe el mensaje de error {string}', function(expectedAnswer) {
//         expect(this.response).to.eql(expectedAnswer)
//     });

// Given("nombre de tarea tenga valor diferente a vacio", function(request) {
//     this.setTo(request)
// });

//     When('se ejecuta metodo post "guardar tarea"', function(request) {
//         console.log("procesando");
//     });

//     Then('recibe response status 201 {string}', function(expectedAnswer) {
//         expect(this.response).to.eql(expectedAnswer)
//     });

// // FIN REGISTRAR TAREA

// // INICIO ACTUALIZAR TAREA

// Given("estado de tarea ha cambiado", function(request) {
//     this.setTo(request)
// });

//     When('se ejecuta metodo put "Actualizar tarea"', function(request) {
//         console.log("procesando");
//     });

//     Then('recibe response status 201 {string}', function(expectedAnswer) {
//         expect(this.response).to.eql(expectedAnswer)
//     });

// // FIN ACTUALIZAR TAREA

// // INICIO LISTAR TAREA

// Given("usuario existente con tareas asignadas", function(request) {
//     this.setTo(request)
// });

//     When('se ejecuta metodo get "Listar tareas"', function(request) {
//         console.log("procesando");
//     });

//     Then(' recibe response status 200 {string}', function(expectedAnswer) {
//         expect(this.response).to.eql(expectedAnswer)
//     });

// Given("usuario existente sin tareas asignadas", function(request) {
//     this.setTo(request)
// });

//     When('se ejecuta metodo get "Listar tareas"', function(request) {
//         console.log("procesando");
//     });

//     Then('recibe response status 200 {string}', function(expectedAnswer) {
//         expect(this.response).to.eql(expectedAnswer)
//     });

// // FIN LISTAR TAREA

// // INICIO ELIMINAR TAREAS

// Given("usuario existente con tareas asignadas", function(request) {
//     this.setTo(request)
// });

//     When('hace click en "eliminar tarea"', function(request) {
//         console.log("procesando");
//     });

//     Then('recibe mensaje {string}', function(expectedAnswer) {
//         expect(this.response).to.eql(expectedAnswer)
//     });

// Given("mensaje {string}", function(message) {
//     this.setTo(message)
// });

//     When('hace click en confirmar', function(request) {
//         console.log("procesando");
//     });

//     And('se ejecute metodo delete "eliminar tarea"', function(request) {
//         console.log("procesando");
//     });

//     Then('recibe response status 200 {string}', function(expectedAnswer) {
//         expect(this.response).to.eql(expectedAnswer)
//     });

// FIN ELIMINAR TAREAS