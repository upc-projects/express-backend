const db = require('../dbconnection/connection');
const user = require('../utils/session');

exports.taskPostOrUpdate = (req, res, next) => {
    const { id, summary, acceptanceCriteria, status, limitDate } = req.body;
    var message = {}
    var sendMessage = false;
    if (summary == "") {
        message["summary"] = "Summary cannot be blank";
        sendMessage = true;
    }
    if (sendMessage) {
        return res.status(400).json(message);
    } else {
        if (id != null) {
            db('tasks')
            .where('id', id)
            .update({
                summary: summary,
                acceptanceCriteria: acceptanceCriteria,
                status: status,
                limitDate: limitDate
            })
            .then(respose => {
                res.status(200).json({
                    message: 'Task updated'
                });
            })
            .catch(err => res.status(400).json('Unable to update task'));
        }  
        else {
            let request= req.user != undefined ? user(req.user.id) : user(req);
            db('tasks')
            .returning('*')
            .insert({
            summary: summary,
            acceptanceCriteria: acceptanceCriteria,
            status: status,
            limitDate: limitDate,
            user_id: request
            })
            .then(task => {
                res.json(task[0]); //return the object not the array
            })
            .catch(err => res.status(400).json('Unable to register'));
        }
    }
}

exports.taskGetAll =  (req, res, next) => {
    db.select('*').from('tasks').where('user_id', user(req))
    .then(tasks => {
        res.json(tasks);
    })
    .catch(err => res.status(400).json('Unable to get tasks'));
}

exports.taskGetOne = (req, res, next) => {
    db.select('*').from('tasks').where({
        'id': req.params.id,
        'user_id': user(req)
    })
    .then(task => {
        res.json(task[0])
    })
    .catch(err => res.status(400).json('Unable to get task'));
}  

exports.taskDeleteOne = (req, res, next) => {
    let request = req.user != undefined ? user(req.user.id) : user(req);
    db('tasks').where({
        'id': req.params.id,
        'user_id': request
    }).del()
    .then(respose => {
        res.status(200).json({
            message: 'Task deleted'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}