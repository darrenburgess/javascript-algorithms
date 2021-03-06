function Plant(){
	this.country = 'Mexico';
	this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property​
Plant.prototype.showNameAndColor = function(){
	console.log('I am a ' + this.name + ' and my color is ' + this.color);
};

// Add the amIOrganic method to the Plant prototype property
Plant.prototype.amIOrganic = function(){
	if(this.isOrganic){
		console.log('I am organic');
	}
};

function Fruit (fruitName, fruitColor){
	this.name = fruitName;
	this.color = fruitColor;
}

// set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype
// methods and properties
Fruit.prototype = new Plant();

// creates a new object, aBanana, with the Fruit constructor
var aBanana = new Fruit('Banana','Yellow');

// aBanana uses the name property from the aBanana object prototype,
// which is Fruit.prototype
console.log(aBanana.name);
console.log(aBanana.country);
console.log('Organic: ' + aBanana.isOrganic);

// Uses the showNameAndColor method from the Fruit object prototype, 
// which is Plant.prototype. The aBanana object inherits all the properties 
// and methods from both the Plant and Fruit functions.​
console.log(aBanana.showNameAndColor());


