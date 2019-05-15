import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Task} from "../entity/Task";
import {User} from "../entity/User";

export class TaskController {

    private taskRepository = getRepository(Task);
    private userRepository = getRepository(User);

    async save(request: Request, response: Response, next: NextFunction) {
        let {summary, acceptanceCriteria, status, createdBy, modifiedBy, limitDate, done} = request.body;
        let user = await this.userRepository.findOne(request.params.id);
        let task = new Task();
        task.summary = summary;
        task.acceptanceCriteria = acceptanceCriteria;
        task.user = user;
        task.status = status;
        task.createdBy = createdBy;
        task.modifiedBy = modifiedBy;
        task.limitDate = limitDate;
        task.done = done;
        task.user = user;
        console.log("Task saved");
        return this.taskRepository.save(task);
    }

    async allTasksByUserId(request: Request, response: Response, next: NextFunction) {
        let userOwner = await this.userRepository.findOne(request.params.id);
        return this.taskRepository.find({where:{user:userOwner}});
    }

    async oneTask(request: Request, response: Response, next: NextFunction) {
        return this.taskRepository.findOne(request.params.id);
    }

    async allTasks(request: Request, response: Response, next: NextFunction) {
        return this.taskRepository.find();
    }

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
