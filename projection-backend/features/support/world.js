const { setWorldConstructor } = require("cucumber");

class User {
  setRequest(request) {
    if (request == "empty") {
      this.requestito = "";
    } 
    this.requestito = request;
  }

  setMessage(message) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }

  setUsuario(usuario) {
    this.usuario = usuario;
  }

  getUsuario() {
    return this.usuario;
  }
} 

setWorldConstructor(User);