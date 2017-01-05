var fs = require('fs');

//create a filestream
var fileStream = fs.createReadStream('test.txt', 'utf8');

//listeners
//executed in order
var firstListener = (fd) => {
    console.log('File is open, first listener');
};

fileStream.on('open', firstListener);

fileStream.on('open', (fd)=>{
    console.log('File is open, second listener');
});

fileStream.on('data', (data)=> {
    console.log(data);
});

//possible to have a listener that just fires ones
fileStream.once('close', ()=> {
    console.log('file is closed');
});

//trigger an event to show that the close listener only fires once
//runs synchronously
fileStream.emit('close');

//list of events listened to 
console.log(fileStream.eventNames());

//check listeners of event
console.log(fileStream.listeners('open'));
fileStream.listeners('open')[0]();

//listeners, max 10
console.log(fileStream.getMaxListeners());
fileStream.setMaxListeners(20);
console.log(fileStream.getMaxListeners());

//remove listeners!
//event listeners the biggest culprit of memory leaks

console.log('Asynchronous calls now -------');

//now time to remove listeners
//need to set this in a different event loop

setTimeout(()=> { fileStream.removeListener('open', firstListener);
    console.log('Removed one listener');
    fileStream.emit('open');
}, 1000);

//remove all
setTimeout(()=> { fileStream.removeAllListeners();
    console.log('Removed all listeners');
    fileStream.emit('open');
}, 2000);