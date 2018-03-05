function FizzBuzz() {

    this.run = function (numbers) {
        var linesToPrint = [];

        numbers.forEach(function (number) {
            if (number % 3 === 0) {
                linesToPrint.push('Fizz');
            } else if(number % 5 === 0) {
                linesToPrint.push('Buzz');
            } else {
                linesToPrint.push(number);
            }

        });

        return linesToPrint;
    };
}