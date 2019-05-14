import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Task} from "../entity/Task";

export class TaskController {

    private taskRepository = getRepository(Task);

    //MISSING STH
    async save(request: Request, response: Response, next: NextFunction) {
        console.log("Task saved");
        return this.taskRepository.save(request.body);
        
    }

    //TO DO
    async allTasksByUserId(request: Request, response: Response, next: NextFunction) {
        //return this.taskRepository.findOne(request.params.userId);
        
    }

    async oneTask(request: Request, response: Response, next: NextFunction) {
        return this.taskRepository.findOne(request.params.id);
    }

    async allTasks(request: Request, response: Response, next: NextFunction) {
        return this.taskRepository.find();
    }

    //MISSING STH
    async updateTask(request: Request, response: Response, next: NextFunction) {
        
        let taskToUpdate = await this.taskRepository.findOne(request.params.id);
        await this.taskRepository.update(taskToUpdate,request.body);
        console.log("Task update");

    }

    async removeTask(request: Request, response: Response, next: NextFunction) {
        let taskToRemove = await this.taskRepository.findOne(request.params.id);
        await this.taskRepository.remove(taskToRemove);
        console.log("Task delete");

    }
}
