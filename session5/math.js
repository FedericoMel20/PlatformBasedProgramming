let {addNumber, subNumber, mulNumber} = require('./arithmetic')
let number1 = 10
let number2 = 90

let result = addNumber(number1, number2)
console.log(`${number1} + ${number2} = ${result}`);

//Sub
let result1 = subNumber(number1, number2)
console.log(`${number1} - ${number2} = ${result1}`);

//Mul
let result2 = mulNumber(number1, number2)
console.log(`${number1} * ${number2} = ${result2}`);