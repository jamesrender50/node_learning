var fs = require('fs');


fs.readFile('nonexistent', 'utf-8', (err, data)=> {
	console.log('nonexistent callback');
	console.log(err);
	console.log(data);
});

fs.readFile('test.txt', 'utf-8', (err, data)=> {
	console.log('existent callback');
	console.log(err);
	console.log(data);
});
