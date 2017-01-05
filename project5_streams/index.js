var FakeReader = require('./fakereader.js');


var fr = new FakeReader();

fr.on('data', (data) => {
    console.log(data);
});