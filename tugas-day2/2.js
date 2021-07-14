const fs = require('fs');

function splitCsv(){
    let data = fs.readFileSync('./data.csv','utf8');
    let splitData = data.split(' ');
        return splitData
}
console.log(splitCsv())