var fs = require('fs')
var csv = require('fast-csv')

var dataArr = [];

fs.createReadStream('test/data.csv')
    .pipe(csv())
    .on('data', function(data) {
        dataArr.push(data);
    })
    .on('end', function() {
    });

module.exports = dataArr;

    