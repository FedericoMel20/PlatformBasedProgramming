//Finding and categorizing the members of a Mafia Syndicate

const prompt = require(`prompt-sync`)()
let name = String(prompt("Insert the name: ")); 
let age = parseInt(prompt("Input the age: "));
let place_to_live = String(prompt("Enter state of residence: "));
let savings = parseFloat(prompt("Input the person's account savings: "));
let rank = " ";
if(age > 40 && (place_to_live == "Nevada" || 
    place_to_live == "New York" || place_to_live == "Havana") &&
    savings > 10000000 ){
        rank = "Don";
        console.log(`${name} is likely a mafia member with ${rank}`);
    }
else if((age >= 25 && age <= 40) && (place_to_live == "New Jersey" || 
    place_to_live == "Manhattan" || place_to_live == "Nevada") &&
    (savings >= 1000000) && (savings <= 10000000)){
        rank = "Underboss";
        console.log(`${name} is likely a mafia member with ${rank}`);
    }
else if((age >= 18 && age <= 24) && (place_to_live == "California" || 
    place_to_live == "Detroit" || place_to_live == "Boston") &&
    savings < 1000000 ){
        rank = "Capo";
        console.log(`${name} is likely a mafia member with ${rank}`);
    }
else{
    console.log(`${name} is not a suspect`);
}