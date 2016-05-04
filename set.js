// Task 1: Each card has symbols on it that vary across four dimensions: color, number, shape, and shading. There are three possible values per dimension (e.g. there are three possible colors: red, green, and purple). Start by writing a solver that takes in a collection of these cards (e.g. 9 cards, 12 cards, 15 cards, etc.), and returns all possible sets that can be made from the inputs.

// Task 2: Then, once you've solved the basic game, extend your solution to handle an arbitrary number of dimensions per card (e.g. each card now has a background color, with three possible values).

// Task 3: Then, once you've got arbitrary dimensions, extend your solution to handle an arbitrary size for the dimensions (e.g. there are now four possible shapes, four colors, four of every dimension). You may assume the number of cards remains three, or solve for an arbitrary number greater than three for extra credit.

// In your response, please send (or link to github, etc):

var dimentions = ["color","number","shape","shading"];
var dimentionNum = 3;
var cardNum = 3;
var cardsdeck = 10;
var dimention = [["1","2","3"],["1","2","3"],["1","2","3"],["1","2","3"]]
var colors = ["1","2","3"];
var numbers = ["1","2","3"];
var shapes = ["1","2","3"];
var shadings = ["1","2","3"];

function Card(color,number,shape,shading) {
	this.color = color;
	this.number = number;
	this.shape = shape;
	this.shading = shading;
}
function collection (cardsNumber){
	var cards = [];
	for (var i=0; i<cardsNumber; i++){
		cards.push(new Card(colors[getRandomArbitrary()], numbers[getRandomArbitrary()], shapes[getRandomArbitrary()],shadings[getRandomArbitrary()]));
	}
	return cards;
}

function getRandomArbitrary() {
  return Math.floor(Math.random() * dimentionNum);
}
function allsameOrAlldifferent(dimentionArr, dementionString){
	if(dimentionArr.join("") === dementionString) return "different";
	else if (dimentionArr.every(function(ele) {return ele === dimentionArr[0];})) return "same";
	else return;
}
function isSet(threeCards) {
	//console.log("threeCards",threeCards);
	var result = [];
	var dementionSet = [];
	function getdimention (key){
		return threeCards.map(
			function(card){ 
				return card[key];});
	}
	
	for (var i = 0; i < dimentions.length; i++){
		dementionSet[i] = getdimention(dimentions[i]);
	    var compareResult = allsameOrAlldifferent(dementionSet[i].sort(), dimention[i].join(""));
	    if(!compareResult) return false; 
	    else {result[i] = compareResult;
	    //console.log("dementionSet:", dementionSet,"result:", result);	
	    }
	}
	result = result.sort();
	// console.log("result,", result.slice(0,1),result.slice(1).join(""));
	// console.log("result,", result.slice(0,dimentions.length-1).join(""), result.slice(dimentions.length-1));
	
	// console.log((result.slice(0,1).toString() === 'different' && allsameOrAlldifferent(result.slice(1),"samesamesame")) )
	// console.log((allsameOrAlldifferent(result.slice(0,dimentions.length),"differentdifferentdifferent") && (result.slice(dimentions.length-1).toString() === "same")))
	if((result.slice(0,1).toString() === 'different' && allsameOrAlldifferent(result.slice(1),"samesamesame")) || (allsameOrAlldifferent(result.slice(0,dimentions.length-1),"differentdifferentdifferent") && (result.slice(dimentions.length-1).toString() === "same"))) {
		//console.log("this is a set!")
		return true;
		
	}

}
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
	if (set.length === 0){return "no combination to be a set!"}
	else { return set;}
}
var cards1 = [{color: '3', number: '2', shape: '1', shading: '2'},{color: '3', number: '2', shape: '1', shading: '3'},{color: '3', number: '2', shape: '1', shading: '1'},{color: '3', number: '1', shape: '2', shading: '1'},{color: '3', number: '3', shape: '3', shading: '3'}];
var cards2 = collection(cardsdeck);
console.log("input cards:")
console.log(cards1);
console.log("set", setCollection(cards1));
console.log("input cards,");
console.log(cards2);
console.log("set", setCollection(cards2));