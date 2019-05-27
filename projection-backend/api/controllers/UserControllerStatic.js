const user = {
    all: (request, response, next) => {
        return request;
    },
    one: (request, db, response, next) => {
        return db.find(usuario => usuario.params.id == request.params.id);
    },
    save: (request, response, next) => {
        console.log("User saved");
        return request.body;
    },
    remove: (request, req, pos, response, next) => {
        console.log("User delete");
        return req.splice(pos, 1);
    }
} 

module.exports = user