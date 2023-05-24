class Car {
	constructor(speed) {
		//declaring property speed as base 0;
		this.speed = speed || 0;
	} 
	drive(newSpeed) {
		// instance method changes speed to newSpeed and returns the new speed;
		this.speed = newSpeed;
		return this.speed;
	}
}
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
