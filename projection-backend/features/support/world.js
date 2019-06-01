const { setWorldConstructor } = require("cucumber");
const { expect } = require("chai");

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

  setRes(statusExpected) {
    let res = {
      send: function(){ },
      json: function(message){
        // console.log(message)
      },
      status: function(statusRecieved) {
          expect(statusRecieved).to.eql(statusExpected);
          return this; 
      }
    }
    this.res = res;
  }

  getRes() {
    return this.res;
  }
} 

setWorldConstructor(User);