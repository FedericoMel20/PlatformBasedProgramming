console.log("Welcome. Press 1 to continue and 2 to stop the program");
const prompt = require(`prompt-sync`)()
console.log("\n1. Continue");
console.log("\n2. Stop");
let number = 0
//Loop to keep it repeating
while(true){
    let choice = parseInt(prompt("Pick 1 or 2: "))
    if(choice === 1){
        number = parseInt(prompt("Enter The Jersey number to know the role: "))
        //If the number is even
        if(number %2 === 0 && number > 0){
            console.log(`A player with the number ${number} is a "Target attacker"`);
            //If the even number is in the range 50-100
            if(number >=50 && number <= 100){
                console.log("This player is also eligible to be chosen as captain");
            }
        }
        //If the number is odd
        else if(number %2 != 0 && number > 0 && number %3 != 0 && number %5 != 0){
            //Odd numbers 90 and below are defenders
            if (number <=90){
            console.log(`The player with the number ${number} is a "Defender"`);
            }
            //Odd numbers above 90 are playmakers
            else if(number > 90){
                console.log(`The player with the number ${number} is a "Playmaker"`);
            }
        }
        //Odd numbers that are multiples of either 3 or 5 are for Goalkeepers
        else if(number %2 != 0 && (number %3 === 0 || number %5 === 0) && number > 0){
            console.log(`A player with the number ${number} is a "Goalkeeper"`);
        }
        //Invalid numbers(Decimal points and those below 1)
        else{
            console.log("This number is not applicable in the squad. Please write an integer more than 0");
        }
    }
    else if(choice === 2){
        console.log("Thank you for using the program. Come back anytime!")
        break;
    }
    //Handling Invalid choice inputs
    else if (isNaN(choice)) {
        console.log("Invalid input. Please enter a number.");
        continue;
    }
    else{
        console.log("Invalid input. Please select 1 or 2.");
    }
}