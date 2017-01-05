var promiseReadFile = require('./promiseReadFile');

promiseReadFile('test.txt').then((data) => console.log(`Data: ${data}`));
promiseReadFile('notexistent.txt').then((data) => console.log(`Data: ${data}`),
    (err) => console.log(`Error: ${err}`)
    );