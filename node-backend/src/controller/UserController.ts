import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import { ObjectPattern, isModuleSpecifier } from "@babel/types";

export class UserController  {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, db: Array<Request>, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log("User saved");
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, req: Array<Object>, pos: number, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
        console.log("User delete");
    }
    
}

