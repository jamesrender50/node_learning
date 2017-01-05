console.log('start of script: ' + new Date().toTimeString());

setTimeout(() =>
	console.log('first setTimeout: ' + new Date().toTimeString()),
	1000
);

var wait = new Date().getTime();
while(new Date().getTime() < wait + 4000) {
	// console.log('waiting... ');
}
console.log('end of script: ' + new Date().toTimeString());