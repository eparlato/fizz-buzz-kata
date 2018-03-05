function FizzBuzz() {

    this.run = function (numbers) {
        var linesToPrint = [];

        numbers.forEach(function (number) {
            if (number === 3) {
                linesToPrint.push('Fizz');
            } else if(number === 5) {
                linesToPrint.push('Buzz');
            } else {
                linesToPrint.push(number);
            }

        });

        return linesToPrint;
    };
}