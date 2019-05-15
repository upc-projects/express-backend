
import {NextFunction, Request, Response} from "express";

const task = {

    save: (requestUser: Request, requestTask: Request, db:Array<Request>) => {
        let userId = requestUser.params.id;
        let task = requestTask;
        task.body.user=requestUser;
        task.body['createdBy']=requestUser.body.nombre;
        task.params.userId=userId;
        db.push(task);
        console.log("Task saved");
        return db[db.length-1];
    },

    allTasksByUserId: (requestUser: number,  db:Array<Request>, next: NextFunction)=>  {
        let userId = requestUser;
        
        return db.filter(tasks=>tasks.params.userId==userId);

    },

    oneTask: (request: Request,  db:Array<Request>, next: NextFunction) => {
        let taskId = request.params.id;
        return db.find(task => task.params.id==taskId);
    },

    allTasks: (request: Request,  response: Response, next: NextFunction)=>  {
        return request;
    },

    updateTask: (request: Request,  db:Array<Request>, next: NextFunction) => {
        
        let task = db.find(task => task.params.id==request.params.id);
        task.body.summary = request.body.summary;
        task.body.acceptanceCriteria = request.body.acceptanceCriteria;
        task.body.user = request.body.user;
        task.body.status = request.body.status;
        task.body.createdBy = request.body.createdBy;
        task.body.modifiedBy = request.body.modifiedBy;
        task.body.limitDate = request.body.limitDate;
        task.body.done = request.body.done;
        console.log("Task updated");
        return task;

    },

    removeTask: (request: Request, req: Array<Request>,pos:number, response: Response, next: NextFunction) => {
        console.log("Task delete");
        return req.splice(pos, 1);
    }
}

module.exports= task
    