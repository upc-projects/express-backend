import {NextFunction, Request, Response} from "express";

const user = {
    all: (request: Request, response: Response, next: NextFunction) => {
        return request;
    },
    one: (request: Request, db: Array<Request>, response: Response, next: NextFunction) => {
        return db.find(usuario => usuario.params.id == request.params.id);
    },
    save: (request: Request, response: Response, next: NextFunction) => {
        console.log("User saved");
        return request.body;
    },
    remove: (request: Request, req: Array<Request>, pos: number, response: Response, next: NextFunction) => {
        console.log("User delete");
        return req.splice(pos, 1);
    }
} 

module.exports = user