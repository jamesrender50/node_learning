module.exports = function(name) {
	var module = {};
	module.name = name;

	module.sayHi = function	() {
		return `Hi ${name}`;
	};

	return module;
};