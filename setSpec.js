// talk about function
describe("SET",function(){
	var dimentionNum = 3;
	var cardNum = 3;
	var cardsdeck = 15;

	describe("getRandomArbitrary", function() {	  
	  	it("should generate random number between 0-dimentionNum", function() {
	  		var number1 = getRandomArbitrary(dimentionNum);
	  		var number2 = getRandomArbitrary(dimentionNum);
	  		var number3 = getRandomArbitrary(dimentionNum);
		    expect(number1).toBeLessThan(4);
		    expect(number1).toBeGreaterThan(-0.1);
		    expect(number2).toBeLessThan(4);
		    expect(number2).toBeGreaterThan(-0.1);
		    expect(number3).toBeLessThan(4);
		    expect(number3).toBeGreaterThan(-0.1);
	    });
	});
	describe("Card constructor function",function(){
		var card1 = new Card("red",2,"diamond","striped");
		
		it("card should has color, number, shape and shading properties from constructor function", function() {
		    expect(card1.color).toEqual("red");
		    expect(card1.number).toEqual(2);
		    expect(card1.shape).toEqual("diamond");
		    expect(card1.shading).toEqual("striped");
	    });
	});
	describe("collection", function(){
			var cardCollection1 = collection(3);
			var cardCollection2 = collection(15);
		it("should generate a collection of cards with a given number", function(){
			expect(Array.isArray(cardCollection1)).toBe(true);
			expect(cardCollection1.length).toEqual(3);
			expect(cardCollection2.length).toEqual(15);
			expect([1,2,3,4]).toContain(cardCollection1[0].number);
		});
	});
	describe("allsameOrAlldifferent",function(){
		var dimentions1 = [1,1,1];
		var dimentions2 = [1,1,3];
		var dimentions3 = [1,2,3];
		it("should retun same if all elements in an array are all the same", function(){
			expect(allsameOrAlldifferent(dimentions1)).toEqual("same");
		});
		it("should retun undefined if all elements in an array are not the same nor different", function(){
			expect(allsameOrAlldifferent(dimentions2)).toBeUndefined();
		});
		it("should retun different if all elements in an array are the different", function(){
			expect(allsameOrAlldifferent(dimentions3)).toEqual("different");
		});

	});
	describe("isSet",function(){
		var cards1 = [{color: '3', number: '2', shape: '1', shading: '2'},{color: '3', number: '2', shape: '1', shading: '3'},{color: '3', number: '2', shape: '1', shading: '1'}];
		var cards2 = [{color: '3', number: '1', shape: '1', shading: '1'},{color: '3', number: '2', shape: '2', shading: '2'},{color: '3', number: '3', shape: '3', shading: '3'}];

		var cards3 = [{color: '3', number: '2', shape: '1', shading: '2'},{color: '3', number: '2', shape: '2', shading: '3'},{color: '3', number: '2', shape: '1', shading: '1'}];
		var cards4 = [{color: '3', number: '2', shape: '1', shading: '2'},{color: '3', number: '2', shape: '1', shading: '2'},{color: '3', number: '2', shape: '1', shading: '2'}];
		var cards5 = [{color: '3', number: '3', shape: '3', shading: '3'},{color: '2', number: '2', shape: '2', shading: '2'},{color: '1', number: '1', shape: '1', shading: '1'}];

		describe("should return true if three cards are a set", function(){
			

			it("when three cards have different values in one dimention but same in the other dimentions",function(){
				expect(isSet(cards1)).toBe(true);
			});
			it("when three cards have same values in one dimention but different in the other dimentions",function(){
				expect(isSet(cards2)).toBe(true);
			});
		});	
		describe("should return false if three cards are not a set", function(){			
			it("when some demetions are same, some are different", function(){	
				expect(isSet(cards3)).toBeFalsy();
			});
			it("when all dimentions are same", function(){	
				expect(isSet(cards4)).toBeFalsy();
			});
			it("when all dimentions are different", function(){	
				expect(isSet(cards5)).toBeFalsy();
			});			
		});
	});
	describe("setCollection",function(){ 
		var cards = [{color: '3', number: '2', shape: '1', shading: '2'},{color: '3', number: '2', shape: '1', shading: '3'},{color: '3', number: '2', shape: '1', shading: '1'},{color: '3', number: '1', shape: '2', shading: '1'},{color: '3', number: '3', shape: '3', shading: '3'}];
		var sets = setCollection(cards);
		it("shout return all the possible sets of a cards collection", function(){
			expect(Object.keys(sets).length).toBe(2);
		});
	});

});