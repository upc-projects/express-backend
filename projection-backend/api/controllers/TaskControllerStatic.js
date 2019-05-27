const task = {

    save: (requestUser, requestTask, db) => {
        let userId = requestUser.params.id;
        let task = requestTask;
        task.body.user=requestUser;
        task.body['createdBy']=requestUser.body.nombre;
        task.params.userId=userId;
        db.push(task);
        console.log("Task saved");
        return db[db.length-1];
    },

    allTasksByUserId: (requestUser,  db, next) =>  {
        let userId = requestUser;
        
        return db.filter(tasks=>tasks.params.userId==userId);

    },

    oneTask: (request,  db, next) => {
        let taskId = request.params.id;
        return db.find(task => task.params.id==taskId);
    },

    allTasks: (request,  response, next) =>  {
        return request;
    },

    updateTask: (request,  db, next) => {
        
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

    removeTask: (request, req, pos, response, next) => {
        console.log("Task delete");
        return req.splice(pos, 1);
    }
}

module.exports= task
    