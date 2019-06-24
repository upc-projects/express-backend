const fs = require('fs');

exports.writeScreenshot = function(name, data) {
    name = name || 'ss.png';
    var screenshotPath = 'D:/Users/DOMINIC/Desktop/UPC VII/Diseño de Experimentos/express-backend/projection-backend/evidence/';
    fs.writeFileSync(screenshotPath + name, data, 'base64');
};
