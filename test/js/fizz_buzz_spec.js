describe('When I run the game', function() {
    var linesToPrint;
    var fizzBuzz = new FizzBuzz();
    var numbers;
    
    it('I can send a list with one number and receive a list with the same number', function() {
        numbers = [1];
        
        linesToPrint = fizzBuzz.run(numbers);

        expect(linesToPrint[0]).toEqual(1);
    });

    it('If i send a list of "normal" numbers (not multiples of 3 or 5) the output is the same list', function() {

        numbers = [1, 2, 4, 5, 7];

        linesToPrint = fizzBuzz.run(numbers);

        expect(linesToPrint[0]).toEqual(1);
        expect(linesToPrint[1]).toEqual(2);
        expect(linesToPrint[2]).toEqual(4);
        expect(linesToPrint[3]).toEqual(5);
        expect(linesToPrint[4]).toEqual(7);
    });

    it('If a number is three, in that position I have a "Fizz" string', function() {
        numbers = [1, 2, 3];

        linesToPrint = fizzBuzz.run(numbers);

        expect(linesToPrint[0]).toEqual(1);
        expect(linesToPrint[1]).toEqual(2);
        expect(linesToPrint[2]).toEqual('Fizz');
    });
});