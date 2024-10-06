
const prompt = require(`prompt-sync`)(); // Require the 'prompt-sync' module to get user input

// Get the lower and upper bounds from the user
let lowerBound = parseInt((prompt("Enter the starting integer: ")));
let upperBound = parseInt((prompt("Enter the final integer: ")));

let sum = 0; // Initialize sum to store the sum of prime numbers

// Define a function to check if a number is prime
function PrimeNumber(num) {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        // Check divisibility from 2 up to the square root of the number
        if (num % i === 0) {
            return false; // If divisible, the number is not prime
        }
    }
    return true; // Return true if the number is prime
}

// Iterate through all numbers from lowerBound to upperBound
for (let num = lowerBound; num <= upperBound; num++) {
    if (PrimeNumber(num)) {
        sum += num; // Add the prime number to the total sum
    }
}

// Output the total sum of prime numbers in the specified range
console.log(`The sum of all the prime numbers from ${lowerBound} to ${upperBound} is ${sum}`);
