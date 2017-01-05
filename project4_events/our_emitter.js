const EventEmitter = require('events');

module.exports = class OurEmitter extends EventEmitter {
    constructor() {
        super();
        this.intervalId = setInterval(()=>{
            if (null == this.intervalId) {
                this.emit('error', new Error('No timeout'));
            }
            this.emit('second', Date.now());
        }, 1000);

        setTimeout(()=>{
            this.emit('error', new Error('This arbitary error'));
        }, 5000);

        setTimeout(()=>{
            this.emit('end', 'We are done');
            clearInterval(this.intervalId);
        }, 12000);
    }
}
