function Phone(brand, price, color, battery, memmory) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.battery = battery;
	this.memmory = memmory;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + 
	" PLN. Battery has " + this.battery + " mAh and memmory card has " + this.memmory + " GB.");
}

var iPhone6S = new Phone("Apple", 2250, "silver", 1715, 16);
var SamsungS6 = new Phone("Samsung", 2000, "blue", 2550, 32);
var One = new Phone("One", 1500, "black", 3100, 16); 

iPhone6S.printInfo();
SamsungS6.printInfo();
One.printInfo();