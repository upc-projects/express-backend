const { setWorldConstructor } = require("cucumber");
const dbMockUser = require('./dbMock')

class User {
  setRequest(request) {
    this.requestito = request;
  }
  all(request, response) {
      return request;
  }
  one(request, response) {
      return db.find(usuario => usuario.params.id == request.params.id);
  }
  save(request, response) {
    if (request.body.username == "") {
      this.response = "name is compulsory"
      return this.response;
    } else if (request.body.password == "") {
      this.response = "password is compulsory"
      return this.response;
    } else {
      dbMockUser.push(request)
      this.db = dbMockUser
    }
  }
  remove(request, response) {
      return req.splice(pos, 1);
  }
} 

setWorldConstructor(User);