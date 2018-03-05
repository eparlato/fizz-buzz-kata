function FizzBuzz() {

    this.run = function(numbers) {
        var linesToPrint = [];

        numbers.forEach(function(number) {
            linesToPrint.push(number);
        });

        return linesToPrint;
    };
}