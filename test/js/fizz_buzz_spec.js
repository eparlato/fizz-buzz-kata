describe('When I run the game', function() {
    var linesToPrint;
    var fizzBuzz = new FizzBuzz();
    var numbers;
    
    beforeEach(function() {
        linesToPrint = [];
    });

    it('I can send a list with one number and receive a list with the same number', function() {
        numbers = [1];
        
        linesToPrint = fizzBuzz.run(numbers);

        expect(linesToPrint[0]).toEqual(1);
    });

    it('If i send a list of "normal" numbers (not multiples of 3 or 5) the output is the same list', function() {

        numbers = [1, 2, 4, 7, 8];

        linesToPrint = fizzBuzz.run(numbers);

        expect(linesToPrint[0]).toEqual(1);
        expect(linesToPrint[1]).toEqual(2);
        expect(linesToPrint[2]).toEqual(4);
        expect(linesToPrint[3]).toEqual(7);
        expect(linesToPrint[4]).toEqual(8);
    });

    it('If a number is three, in that position I have a "Fizz" string', function() {
        numbers = [1, 2, 3];

        linesToPrint = fizzBuzz.run(numbers);

        expect(linesToPrint[0]).toEqual(1);
        expect(linesToPrint[1]).toEqual(2);
        expect(linesToPrint[2]).toEqual('Fizz');
    });

    it('If a number is five, the output is "Buzz"', function() {
        numbers = [3, 4, 5];

        linesToPrint = fizzBuzz.run(numbers);

        expect(linesToPrint[0]).toEqual('Fizz');
        expect(linesToPrint[1]).toEqual(4);
        expect(linesToPrint[2]).toEqual('Buzz');
    });

    it('If a number is a multiple of three, the output is "Fizz"', function() {
        numbers = [6, 9, 11, 12];

        linesToPrint = fizzBuzz.run(numbers);

        expect(linesToPrint[0]).toEqual('Fizz');
        expect(linesToPrint[1]).toEqual('Fizz');
        expect(linesToPrint[2]).toEqual(11);
        expect(linesToPrint[3]).toEqual('Fizz');
    });

    it('If a number is multiple of five, the output is "Buzz"', function() {
        numbers = [10, 20, 40];

        linesToPrint = fizzBuzz.run(numbers);

        expect(linesToPrint[0]).toEqual('Buzz');
        expect(linesToPrint[1]).toEqual('Buzz');
        expect(linesToPrint[2]).toEqual('Buzz');
    });

    it('If a number is multiple both of three and five, the output is "FizzBuzz"', function() {
        numbers = [15, 30, 45];

        linesToPrint = fizzBuzz.run(numbers);

        expect(linesToPrint[0]).toEqual('FizzBuzz');
        expect(linesToPrint[1]).toEqual('FizzBuzz');
        expect(linesToPrint[2]).toEqual('FizzBuzz');
    });
});