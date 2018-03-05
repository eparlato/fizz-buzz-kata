function FizzBuzz() {

    this.run = function (numbers) {
        var linesToPrint = [];

        numbers.forEach(function (number) {
            if (number === 3) {
                linesToPrint.push('Fizz');
            } else {
                linesToPrint.push(number);
            }

        });

        return linesToPrint;
    };
}