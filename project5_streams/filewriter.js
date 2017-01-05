const fs = require('fs');

var fileWriter = fs.createWriteStream('testwrite.txt');

fileWriter.write('This is a first line');
fileWriter.write('This is a second line');
fileWriter.end(); //flushes and releases resources

fs.readFile('testwrite.txt', 'utf8', (err, data)=>console.log(`Before: ${data}`));
fileWriter.on('finish', ()=>{
    fs.readFile('testwrite.txt', 'utf8', (err, data)=>
        console.log(`during: ${data}`));
});