var fs = require('fs');

var fileA;
var fileS;

fileS = fs.readFileSync('test.txt', 'utf-8');
console.log(fileS);

fs.readFile('test.txt', 'utf-8', (err, data) => {
	fileA = data;
});
console.log(fileA);// gets run before the file has completed loading
setTimeout(() => console.log(fileA), 100);