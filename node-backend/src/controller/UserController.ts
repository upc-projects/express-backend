import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async findByUsernameAndPassword(request: Request, response: Response, next: NextFunction){
        let {username, password} = request.body;
        let user = await this.userRepository.findOne({where:{username:username, password:password}});

        if(user == null){
            response.status(403).send("Username or password incorrect");
            return;
        }
        console.log("User logged in")
        return user;
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let {username, password} = request.body;

        //Validate existing user
        let possibleUser = await this.userRepository.findOne({where:{username:username}});
        if(possibleUser != null){
           response.status(400).send("Username already in use");
           return;
        }

        //Validate password
        let hasnumber = /\d/;
        if(!hasnumber.test(password) || password.length <= 8){
            response.status(401).send("The password must contain a number and at least 8 characters");
            return;
        }

        await this.userRepository.save(request.body);
        console.log("User saved");
        response.status(200).send("User saved");
        return;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
        console.log("User deleted");
        response.status(201).send("User deleted");
        return;
    }
}
