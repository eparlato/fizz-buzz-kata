var numbers = [];
var i;
var fizzBuzz;
var output;

for(i = 1; i <= 100; i++) {
    numbers.push(i);
}

fizzBuzz = new FizzBuzz();

output = fizzBuzz.run(numbers);

console.log('Output:');

output.forEach(function(line) {
    console.log(line);
});