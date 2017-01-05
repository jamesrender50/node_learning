const fs = require('fs');

var reader = fs.createReadStream('test.txt', 'utf8');

reader.on('readable', (data)=>{
    var chunk;
    while(chunk = reader.read(1)) {  //using the data event is preferable to calling read
        console.log(chunk);
    }
});