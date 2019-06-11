const { setWorldConstructor } = require("cucumber");
const { expect } = require("chai");

class Task{
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

  setTarea(tarea) {
    this.tarea = tarea;
  }

  getTarea() {
    return this.tarea;
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
setWorldConstructor(Task);
