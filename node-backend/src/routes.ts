import {UserController} from "./controller/UserController";
import {TaskController} from "./controller/TaskController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},{
    method: "post",
    route: "/users/:id/tasks",
    controller: TaskController,
    action: "save"
},{
    method: "get",
    route: "/users/:id/tasks",
    controller: TaskController,
    action: "allTasksByUserId"
},{
    method: "get",
    route: "/tasks/:id",
    controller: TaskController,
    action: "oneTask"
},{
    method: "get",
    route: "/tasks",
    controller: TaskController,
    action: "allTasks"
},{
    method: "post",
    route: "/users/:userId/tasks/:taskId",
    controller: TaskController,
    action: "updateTask"
},{
    method: "delete",
    route: "/users/:userId/tasks/:taskId",
    controller: TaskController,
    action: "removeTask"
},{
    method: "get",
    route: "/login",
    controller: UserController,
    action: "findByUsernameAndPassword"
}];