var OurEmitter = require('./our_emitter.js');

var emitter = new OurEmitter();
var log = (msg) => console.log(msg);

emitter.on('second', log);
emitter.on('end', log);

// can never skip the error emitter if its defined
emitter.on('error', log);

