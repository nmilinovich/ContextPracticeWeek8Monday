const Calculator = require('./02-calculator.js');

class FancyCalculator extends Calculator {
	//dont need constructor
	//since we inherited from calculator
	//constructor is default, if we wanted to add
	//then we need constructor
	
	constructor(total) {
		super(total);
	}
	setTotal(newTotal) {
		this.total = newTotal;
		return this.total;
	}
	modulo(num) {
		this.total %= num;
		return this.total;
	}
	squared() {
		this.total **= 2;
		return this.total;
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}