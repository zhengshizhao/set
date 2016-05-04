// Task 1: Each card has symbols on it that vary across four dimensions: color, number, shape, and shading. There are three possible values per dimension (e.g. there are three possible colors: red, green, and purple). Start by writing a solver that takes in a collection of these cards (e.g. 9 cards, 12 cards, 15 cards, etc.), and returns all possible sets that can be made from the inputs.

// Task 2: Then, once you've solved the basic game, extend your solution to handle an arbitrary number of dimensions per card (e.g. each card now has a background color, with three possible values).

// Task 3: Then, once you've got arbitrary dimensions, extend your solution to handle an arbitrary size for the dimensions (e.g. there are now four possible shapes, four colors, four of every dimension). You may assume the number of cards remains three, or solve for an arbitrary number greater than three for extra credit.

var dimentions = ["color","number","shape","shading"];
//an arbitrary size for the dimensions, can change the value.
var dimentionNum = 3;
//the number of cards to form a set. here is a const 3.
var cardNum = 3; 
//the total numbers of cards collection, can change the value. 
var cardsdeck = 15;
var dimentionValues = {
	color: [],
	number:[],
	shape:[],
	shading:[]
};

var dimention = [];
//generate a random number in a range of [0, dimentionNum];
function getRandomArbitrary() {
  return Math.floor(Math.random() * dimentionNum);
}
/*Set an array of all possible values for each demention. A card has four dimensions, color,number,shape,shading, and each demention has 'dimentionNum' possible values. here I use an array of ["1","2","3",....,"dimentionNum"] to represent a set of all possible values of a dimention.  */ 
for (var key in dimentionValues) {
	if (dimentionValues.hasOwnProperty(key)) {
	for(var j =1; j<= dimentionNum; j++) {
		dimentionValues[key].push(j);
	}
	dimention.push(dimentionValues[key]);
	}
}
//consturctor function for a card. 
function Card(color,number,shape,shading) {
	this.color = color;
	this.number = number;
	this.shape = shape;
	this.shading = shading;
}
//Generate a collection of cards using Card consturctor function. 
function collection (cardsNumber){
	var cards = [];
	for (var i=0; i<cardsNumber; i++){
		cards.push(new Card(dimentionValues.color[getRandomArbitrary()], dimentionValues.number[getRandomArbitrary()], dimentionValues.shape[getRandomArbitrary()],dimentionValues.shading[getRandomArbitrary()]));
	}
	return cards;
}
//Take an array of the demention value for each cards, return true when all values are the same, return flase when all values are different from each other.  
function allsameOrAlldifferent(dimentionArr){
	function isDifferent(dimentionArr) {
		if (dimentionArr.length === 0) return true;
		if (dimentionArr.slice(1).some(function(ele){return ele === dimentionArr[0];})) return false;
		else {return isDifferent(dimentionArr.slice(1));}
	}
	function isSame(dimentionArr){
		if (dimentionArr.every(function(ele) {return ele === dimentionArr[0];})) return true;
	}
	
	if(isDifferent(dimentionArr)) return "different";
	else if (isSame(dimentionArr)) return "same";
	else return;
}
//Take an array of three cards, and check if the cards can be a set. 
function isSet(cardsToCheck) {
	var result = [];
	var dementionSet = [];
	function getdimention (key){
		return cardsToCheck.map(
			function(card){ 
				return card[key];});
	}
	
	for (var i = 0; i < dimentions.length; i++){
		dementionSet[i] = getdimention(dimentions[i]);
	    var compareResult = allsameOrAlldifferent(dementionSet[i].sort());
	    if(!compareResult) return false; 
	    else {result[i] = compareResult;
	    }
	}
	result = result.sort();
	if((result.slice(0,1).toString() === 'different' && result.slice(1).join("")==="samesamesame") || (result.slice(0,dimentions.length-1).join("") === "differentdifferentdifferent" && (result.slice(dimentions.length-1).toString() === "same"))) {
		return true;
	}
}
//Generate different combination of three cards from the collection of cards, and return an array of all possible set.  
function setCollection(cards) {
	var set = {};
	var count = 0;
	for (var i=0; i< cards.length-2; i++) {
		for (var j=i+1; j< cards.length-1; j++){
			for (var k=j+1; k<cards.length; k++) {
				var cardsToCheck = [cards[i],cards[j],cards[k]];
				//console.log("cardsToCheck",cardsToCheck);
				if(isSet(cardsToCheck)) {
					count++;
					set[count]=cardsToCheck;
				}
			}
		}
	}
	if (set.length === 0){ console.log("no set cobmination");}
	else { return set;}
}

var cards1 = [{color: '3', number: '2', shape: '1', shading: '2'},{color: '3', number: '2', shape: '1', shading: '3'},{color: '3', number: '2', shape: '1', shading: '1'},{color: '3', number: '1', shape: '2', shading: '1'},{color: '3', number: '3', shape: '3', shading: '3'}];
var cards2 = collection(cardsdeck);


console.log("input cards1:");
console.log(cards1);
console.log("set", setCollection(cards1));
console.log("input cards2,");
console.log(cards2);
console.log("set", setCollection(cards2));

//remove comments (double-slash) below when testing the case of dimentionNum = 4;
// var cards3 = [{color: '3', number: '2', shape: '1', shading: '2'},{color: '3', number: '2', shape: '1', shading: '3'},{color: '3', number: '2', shape: '1', shading: '1'},{color: '3', number: '1', shape: '2', shading: '1'},{color: '3', number: '3', shape: '3', shading: '3'},{color: '3', number: '2', shape: '1', shading: '4'}];
// console.log("input cards3,");
// console.log(cards3);
// console.log("set", setCollection(cards3));

