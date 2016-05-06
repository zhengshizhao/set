// talk about function
describe("SET",function(){
	var dimentionNum = 3;
	var cardNum = 3;
	var cardsdeck = 15;

	describe("getRandomArbitrary function", function() {	  
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
	describe("collection function", function(){
		it("should generate a collection of cards with a given number", function(){
			var cardCollection = collection(3);
			expect(Array.isArray(cardCollection)).toBe(true);
			expect(cardCollection.length).toEqual(3);
			expect([1,2,3,4]).toContain(cardCollection[0].number);
		});
	});
});