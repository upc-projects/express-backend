const { Given, When, And, Then } = require("cucumber");
const { expect } = require("chai");
const userController = require('../../api/controllers/userController');
const taskController = require('../../api/controllers/taskController');

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
          username: 'daztery@gmail.com',
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

//Descomentar y cambiar el id
/*
// Scenario: Eliminar usuario5: Elimina usuario
Given("mensaje {string}", function(message) {
    this.setRequest(message)
});

    When('5 se ejecuta metodo delete {string}', function(request) {
        const id = 1;
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
*/
// INICIO REGISTRAR TAREA

//Primero registrar 1 Usuario

/*
// Scenario: Registrar tarea1: summary vacio
  Given("nombre de tarea es {string}", function(empty) {
      this.setRequest(empty)
  });

     When('1 se ejecuta metodo post {string}', function(request) {
      const tarea = {
        body: {
            summary: '',
            acceptanceCriteria: 'acceptanceCriteria',
            status: '1',
            limitDate:'2019-06-18'
        }
      }
  
      this.setUsuario(tarea.body);
  
      this.setRes(400)
  
      try {
        taskController.taskPostOrUpdate(tarea, this.getRes(), null);
        this.setMessage("Nombre de tarea es obligatorio");
      } catch (err) {
        console.log(err);
      }
     });

     Then('1 recibe el mensaje de error {string}', function(expectedAnswer) {
         expect(this.getMessage()).to.eql(expectedAnswer)
     });

// Scenario: Registrar tarea2: Guarda la tarea correctamente
  Given("nombre de tarea tenga valor diferente a {string}", function(full) {
      this.setRequest(full)
  });
      When('2 se ejecuta metodo post {string}', function(request) {
        const tarea = {
          body: {
            summary: 'Pantalla de Login',
            acceptanceCriteria: 'acceptanceCriteria',
            status: '1',
            limitDate:'2019-06-18'
          },
          user:{
            id:1
          }
        }
        this.setUsuario(tarea.body);
        this.setRes(201)
    
        try {
          taskController.taskPostOrUpdate(tarea, this.getRes(), null);
          this.setMessage("Tarea guardada");
        } catch (err) {
          console.log(err);
        }
      });
      Then('2 recibe response status 201 {string}', function(expectedAnswer) {
        expect(this.getMessage()).to.eql(expectedAnswer);
      });

// // FIN REGISTRAR TAREA

// // INICIO ACTUALIZAR TAREA

Given("estado de tarea ha {string}", function(full) {
  this.setRequest(full)
});

    When('1 se ejecuta metodo put {string}', function(request) {
      const tarea = {
        body: {
            id:1,
            summary: 'Jajajaja',
            acceptanceCriteria: 'miegulito',
            status: '1',
            limitDate:'2019-06-18'
        }
      }
      this.setUsuario(tarea.body);
      this.setRes(200)

      try {
        taskController.taskPostOrUpdate(tarea, this.getRes(), null);
        this.setMessage("Task updated");
      } catch (err) {
        console.log(err);
      }
    });

    Then('1 recibe response status 200 {string}', function(expectedAnswer) {
      expect(this.getMessage()).to.eql(expectedAnswer)
    });

// // FIN ACTUALIZAR TAREA

// // INICIO LISTAR TAREA

//Listar tareas con usuario existente
Given("usuario existente con {string}", function(request) {
  this.setRequest(request)
});
    When('1 se ejecuta metodo get {string}', function(request) {
      this.setRes(200)
      id=1;
      try {
        taskController.taskGetAll(id, this.getRes(), null);
        this.setMessage("tareas obtenidas");
      } catch (err) {
        console.log(err);
      }
    });
    Then('2 recibe response status 200 {string}', function(expectedAnswer) {
        expect(this.getMessage()).to.eql(expectedAnswer)
    });


//Listar tareas sin usuario existente
Given("usuario existente sin {string}", function(request) {
  this.setRequest(request)
});
    When('2 se ejecuta metodo get {string}', function(request) {
      this.setRes(200)
      
      id=1;
      try {
        taskController.taskGetAll(1, this.getRes(), null);
        this.setMessage("No hay tareas disponibles");
      } catch (err) {
        console.log(err);
      }
    });
    Then('3 recibe response status 200 {string}', function(expectedAnswer) {
      expect(this.getMessage()).to.eql(expectedAnswer)
    });

// // FIN LISTAR TAREA

// // INICIO ELIMINAR TAREAS
//Mensaje de ¿Desea eliminar tarea?
 Given("1 usuario existente con {string}", function(message) {
    this.setRequest(message)
 });
     When('1 hace click en {string}', function(request) {
      this.setMessage("¿Desea eliminar esta tarea?");
      this.setRes(200)
     });
     Then('1 recibe mensaje {string}', function(expectedAnswer) {
        expect(this.getMessage()).to.eql(expectedAnswer)
     });


//Descomentar y cambiar el id

//Ejecuta el metodo eliminar

 Given("2 mensaje {string}", function(message) {
  this.setRequest(message)
 });
     When('2 se ejecute metodo delete {string}', function(request) {
      console.log("procesando");
      user_id=1
      const tarea = {
        params: {
            id:3,
            summary: 'Pantalla de Login',
            acceptanceCriteria: 'acceptanceCriteria',
            status: '1',
            limitDate:'2019-06-18'
        },
        user:{
            id:1
        }
      }
      this.setUsuario(tarea.body);
      this.setRes(200)
      try {
        taskController.taskDeleteOne(tarea, this.getRes(), null);
        this.setMessage("tarea eliminada");
      } catch (err) {
        console.log(err);
      }
     });
     Then('6 recibe response status 200 {string}', function(expectedAnswer) {
      expect(this.getMessage()).to.eql(expectedAnswer)
     });

// FIN ELIMINAR TAREAS
*/