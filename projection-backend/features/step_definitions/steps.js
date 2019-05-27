const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");

//REGISTRAR USUARIO

Given("user name is {string}", function(enzo) {
    this.setRequest(enzo);
});

  When('post method save user is {string}', function(enzo) {
      this.save(enzo = {
        body: {
          username: '',
          password: 'testing321', 
          firstName: 'Enzo',
          lastName: 'Lizama',
          enabled: 0
        }
      }, null);
  });

  Then('the user recieves the message {string}', function(expectedAnswer) {
      expect(this.response).to.eql(expectedAnswer);
  });

Given("user password is {string}", function(diego) {
    this.setRequest(diego)
});

  When('post method save users is {string}', function(diego) {
      this.save(diego = {
        body: {
          username: 'diegosalas',
          password: '', 
          firstName: 'Diego',
          lastName: 'Salas',
          enabled: 0
        }
      }, null)
  });
  Then('the user recieves the messagesito {string}', function(expectedAnswer) {
      expect(this.response).to.eql(expectedAnswer)
  });

// Given("contraseña contiene menos de 8 caracteres y/o no contenga un numero", function(request) {
//     this.setTo(request)
// });

//     When('se ejecuta metodo post "guardar usuario"', function(request) {
//         this.service.save(request)
//     });

//     Then('recibe el mensaje de error {string}', function(expectedAnswer) {
//         expect(this.response).to.eql(expectedAnswer)
//     });

// Given("correo electronico es vacio", function(request) {
//     this.setTo(request)
// });

//     When('se ejecuta metodo post "guardar usuario"', function(request) {
//         this.service.save(request)
//     });

//     Then('recibe el mensaje de error {string}', function(expectedAnswer) {
//         expect(this.response).to.eql(expectedAnswer)
//     });

// Given("ingresa los 3 campos correctamente", function(request) {
//     this.setTo(request)
// });

//     When('se ejecuta metodo post "guardar usuario"', function(request) {
//         this.service.save(request)
//     });

//     Then('recibe response status 201 {string}', function(expectedAnswer) {
//         expect(this.response).to.eql(expectedAnswer)
//     });

// // FIN REGISTRAR USUARIO

// // INICIO ELIMINAR USUARIO

// Given("un usuario existente {int}", function(number) {
//     this.setTo(number)
// });

//     When('hace click en "eliminar"', function(request) {
//         console.log("procesando");
//     });

//     Then('se muestra mensaje {string}', function(expectedAnswer) {
//         expect(this.response).to.eql(expectedAnswer)
//     });

// Given("mensaje {string}", function(message) {
//     this.setTo(message)
// });

//     When('hace click en "confirmar"', function(request) {
//         console.log("procesando");
//     });

//     And('se ejecuta metodo delete "eliminar usuario"', function(request) {
//         console.log("procesando");
//     });

//     Then('recibe response status 200  {string}', function(expectedAnswer) {
//         expect(this.response).to.eql(expectedAnswer)
//     });

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