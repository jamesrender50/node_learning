const Writable = require('stream').Writable;

module.exports = class OurWriter extends Writable {
    constructor(opt) {
        super(opt);
        this.source = [];
    }

    _write(chunk, encoding, callback) {
        this.source.push(chunk);
        callback();
    }

    getSource() {
        return this.source;
    }
}
