var OurWritable = require('./ourwriter');

// var writer = new OurWritable({decodeStrings: false});
var writer = new OurWritable();

writer.write('Here is a line');
writer.write('and another line..');

console.log(writer.getSource());