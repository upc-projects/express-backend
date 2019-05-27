const db = require('../dbconnection/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.userRegister = (req, res, next) => {
    const { username, password, confirmPassword } = req.body;
    if (password != confirmPassword) {
        return res.status(409).json({
            message: 'Passwords must match'
        });
    } else {
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
            .catch(err => res.status(400).json('Unable to register'));
            }
        });
    }
}

exports.userLogin = (req, res, next) => {
    const { username, password } = req.body;
    db.select('*').from('users').where('username', username)
    .then(user => {
        bcrypt.compare(password, user[0].password, (error, result) => {
            if (error) {
                return res.status(401).json({ 
                    message: 'Auth failed'
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
    .catch(err => res.status(400).json('Unable to register'));
}