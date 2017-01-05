var fs = require('fs');

log('start readFile');  //direct call

//adding to event loop
fs.readFile('test.txt', () => {
	log('end readFile');  
});  


//adding to event loop but with no wait time
setTimeout(() => log('added to event loop'), 0);

log('after event loop'); //direct call



function log(message) {
	console.log(message + ": " + now());
}


function now() {
	return new Date().getTime();
}


//highlights direct calls vs event loop

