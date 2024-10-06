//Define Prime Numbers
function PrimeNumber(num){
    if(num <= 1){
        return false; // Numbers from 1 and below are not prime
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false; //Numbers that have a factor between 2 and their square roots are not prime
        }
    }
    return true 
}
//Find The Next Prime Number
function NextPrime(num){
    let next = num += 1; //Add 1 to the number
    while(!PrimeNumber(next)){ //If the number is not prime after adding 1
        next ++; //Keep adding until you get to a prime number
    }
    return next; //Return that prime number
}

const prompt = require(`prompt-sync`)()
console.log("Welcome, here you can find the immediate prime number that succeeds any input number")
while (true){  //Putting it in a loop to keep it running until the user decides to stop
    console.log("1. Continue")
    console.log("2. Stop")
    let choice = parseInt(prompt("Press 1 to continue or 2 to stop running the program: "))
    if(choice === 1){
        let userInput = parseInt(prompt("Enter an integer: "));
        if (isNaN(userInput)){  //Handling inputs that aren't numbers
            console.log("Invalid input. Please enter a number.");
            continue;
        }
        else{
            console.log(`The next prime number after ${userInput} is ${NextPrime(userInput)}`); //Displaying the next prime number as promised
        }
    }
    else if(choice === 2){  //Break the loop if the user wishes to stop
        console.log("Thank you for using the program. Come back anytime!")
        break;
    }
    //Handling Invalid choice inputs
    else if (isNaN(choice)) {
        console.log("Invalid input. Please enter a number.");
        continue;
    }
    else{  //The numbers must be 1 or 2
        console.log("Invalid input. Please select 1 or 2.");
    }
}
