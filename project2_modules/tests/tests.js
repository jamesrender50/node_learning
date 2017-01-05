var assert = require('assert');
var math = require('../math');

//the test suite??
describe('math tests', function() {

	it('should add', function(done) {
		assert.strictEqual(math.add(1,1), 2);
		assert.strictEqual(math.add(0,10), 10);
		assert.strictEqual(math.add(-1,1), 0);
		done();
	});	

	it('should subtract', function(done) {
		assert.strictEqual(math.subtract(1,1), 0);
		assert.strictEqual(math.subtract(0,10), -10);
		assert.strictEqual(math.subtract(-1,1), -2);
		done();
	});	

	it('should use pie', function(done) {
		assert.strictEqual(math.add(math.pi,math.pi), math.pi*2);
		done();
	});


});