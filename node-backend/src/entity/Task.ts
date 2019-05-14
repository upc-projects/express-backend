import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from "./User";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    summary: string;

    @Column()
    acceptanceCriteria: string;

    @Column()
    status: number;

    @Column()
    createdBy: string;

    @Column()
    modifiedBy: string;

    @Column()
    limitDate: Date;

    @Column()
    done: boolean;

    @ManyToOne(type => User, user => user.tasks)
    user: User;
}
