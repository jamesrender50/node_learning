const Readable = require('stream').Readable;

//generator function
//allows to return multiple times from a function
function* reading() {
    yield "this is the first line";
    yield "this is the second line";
    yield "this is the third line";
    yield "this is the fourth line";
}

module.exports = class OurReader extends Readable {

    constructor(opt) {
        super(opt);
        this.generator = reading();
    }

    _read() {
        var line = this.generator.next().value;
        this.push(line);
    }

}