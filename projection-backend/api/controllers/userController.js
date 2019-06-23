const db = require('../dbconnection/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const validateEmail = require('../utils/validateEmail');
const user = require('../utils/session');

exports.userRegister = (req, res, next) => {
    const { username, password, confirmPassword } = req.body;
    var message = {}
    var sendMessage = false;

    if (username == "") {
        message["username"] = 'Email is required'
        sendMessage = true;
    }
    if (!validateEmail(username) && username != "") {
        message["username"] = 'Email needs to have correct format'
        sendMessage = true;
    }
    if (password.length < 6 && password != "") {
        message["password"] = 'Password must be at least 6 characters'
        sendMessage = true;
    }
    if (password == "") {
        message["password"] = 'Password must not be empty'
        sendMessage = true;
    }
    if (password != confirmPassword) {
        message["password"] = 'Passwords must match'
        sendMessage = true;
    } 

    if (sendMessage) {
        return res.status(400).json(message);
    }
    
    else {    
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            } else {
                db('users')
                .returning('*')
                .insert({
                username: username,
                password: hash,
                confirmPassword: hash
            })
            .then(user => {
                res.json(user[0]); //return the object not the array
            })
            .catch(err => { 
                message["username"] = 'Email already exists'
                return res.status(400).json(message)
                });
            }
        });
    }
}

exports.userLogin = (req, res, next) => {
    const { username, password } = req.body;
    var message = {}
    
    db.select('*').from('users').where('username', username)
    .then(user => {
        bcrypt.compare(password, user[0].password, (error, result) => {
            if (error) {
                return res.status(401).json({ 
                    error
                });  
            } 
            if (result) {
                const token = jwt.sign(
                    {
                        username: user[0].username,
                        id: user[0].id
                    }, 
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }
                );
                return res.status(200).json({
                    message: 'Auth successful',
                    token: token
                });
            }
            res.status(401).json({ 
                message: 'Auth failed'
            });
        });
    })
    .catch(err => {
        if (username == "") {
            message["username"] = 'Username cannot be blank'
        }
        if (password == "") {
            message["password"] = 'Password cannot be blank'
        }
        if (username != "") {
            message["username"] = 'Invalid Username'
        }
        if (!validateEmail(username) && username != "") {
            message["username"] = 'Email needs to have correct format'
            sendMessage = true;
        }
        if (password != "") {
            message["password"] = 'Invalid Password'
        }

        res.status(400).json(message)
    });
}

exports.userDelete = (req, res, next) => {
    if (typeof req === 'number') {
        db('users').where({
            'id': req
        }).del()
        .then(respose => {
            res.status(200).json({
                message: 'User deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    } else {
        db('users').where({
            'id': user(req)
        }).del()
        .then(respose => {
            res.status(200).json({
                message: 'User deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    }
}