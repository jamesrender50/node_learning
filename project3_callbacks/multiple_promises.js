var promiseReadFile = require('./promiseReadFile');

function multiplePromises(firstFile) {
    return promiseReadFile(firstFile)
        .then((data) => promiseReadFile(data.trim()))
        .then((data) => promiseReadFile(data.trim()));
}

multiplePromises('networkcallback').then((data)=>console.log(data), (err)=> console.log(err));
multiplePromises('nonexistent').then((data)=>console.log(data), (err)=> console.log(err));