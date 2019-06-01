const jwt = require('jsonwebtoken');

const user = function(req) {
    if (typeof req === 'number') {
        return req;
    } else {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        return decoded.id;
    }
}

module.exports = user;