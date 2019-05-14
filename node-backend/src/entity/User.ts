import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Task} from "./Task";
import * as bcrypt from "bcryptjs";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    firstName: number;

    @Column()
    lastName: number;

    @Column()
    enabled: boolean;

    @OneToMany(type => Task, task => task.user)
    tasks: Task[];

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }


}
