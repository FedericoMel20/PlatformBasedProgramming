//For Loop
console.log("---------------");

for(let i=1;i<=10;i++){
    console.log(`Looping : ${i}`);
}

//Print 10, 20, 30 ... 100
console.log("---------------------");
for(let i=10; i<101; i+=10){
console.log(`2nd looping : ${i}`);
}

//Print 100, 90, 80 .... 0
console.log("................");
for(let j=100;j>=0;j-=10){
    console.log(`Descending: ${j}`);
}
// Print 1 -2 3.... -10
console.log("---------------");
let sign = 1
for(let k=1;k<=10;k++){
    console.log(k * sign);
    sign = sign * -1
}
//Checking if a number is a prime number
console.log("-----------------------")
let check = 10
let factor = 0
for(let i=1; i<= check; i++){
    if(check % i == 0){
        factor ++;
    }
}
if(factor == 2){
    console.log(`${check} is a prime number`);
}
else{
    console.log(`${check} is not a prime number`);
}
// Finding the factorial of a number
console.groupCollapsed("----------------")
let num = 5
let result = 1
for(let i=1; i<=num; i++){
    result *=i;
}
console.log(`${num}! is equal to ${result}`);