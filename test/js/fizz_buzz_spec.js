describe('When I run the game', function() {
    var linesToPrint;
    var fizzBuzz;
    var numbers;
    
    it('I can send a list with one number and receive a list with the same number', function() {
        numbers = [1];
        
        fizzBuzz = new FizzBuzz();

        linesToPrint = fizzBuzz.run(numbers);

        expect(linesToPrint[0]).toEqual(1);
    });
});