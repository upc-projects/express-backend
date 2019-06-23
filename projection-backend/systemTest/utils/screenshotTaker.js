const fs = require('fs');

exports.writeScreenshot = function(name, data) {
    name = name || 'ss.png';
    var screenshotPath = 'C:/Users/Daztery/Desktop/Repositories/express-backend/projection-backend/evidence/';
    fs.writeFileSync(screenshotPath + name, data, 'base64');
};
