let number = 9;
if(number %2 == 0){
    console.log(`${number} is even Number`);
}
else{
    console.log(`${number} is odd Number`);
}

/**
 *Age Categorize
 
 *0-12 => Children
 *13 - 17 => Teenager
 * >18 => Adult
 * **/
const prompt = require(`prompt-sync`)()
let age = prompt("Insert your age: ");
if(age >= 18){
    console.log(`Adult`);
}
else if(age >= 13){
    console.log(`Teenager`)
}
else if(age > 0){
    console.log(`Children`)
}
else{
    console.log(`Incorrect Age`)
}