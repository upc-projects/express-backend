const fs = require('fs');

exports.writeScreenshot = function(name, data) {
    name = name || 'ss.png';
    var screenshotPath = '/Users/diegosalasnoain/Desktop/UPC VII/Diseno de experimentos/express-backend/projection-backend/evidence/';
    fs.writeFileSync(screenshotPath + name, data, 'base64');
};
