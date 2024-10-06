//Determining if a young Businessman's death is homicide or not
let score = 0;
let D = ''
let B = 0
let E = ''
console.log("Answer the following questions with a 'yes' or a 'no': ")
const prompt = require(`prompt-sync`)()
let A = prompt("Was there cyanide powder in the victim's stomach? ")
if(A === "yes"){
    score += 50
    B = parseInt(prompt("How much cyanide powder is there in milligrams: "));
    if(B > 50){
        score += 500
        console.log("Okay, great start, let's answer more questions");
    }
        
}
else if(A === "no"){
    console.log("Okay, let's answer the next question");
}
else{
    console.log("Invalid input. Please answer with 'yes' or 'no'");
}
let C = prompt("Does CCTV show someone putting something into the glass? ")
if(C === "yes"){
    D = prompt("Type 'yes' if it is clearly shown and 'no' if it is blurry: ")
    if(D === "yes"){
        score += 250
        console.log("Great info. Let's move on")
    }
    else if(D === "no"){
        score += 150
        console.log("Great info. Let's move on")
    }
    else{
        console.log("Invalid input. Please answer with 'yes' or 'no'");
    }
}
else if(C === "no"){
    console.log("Great info. Let's move on")
}
else{
    console.log("Invalid input. Please answer with 'yes' or 'no'");
}
E = prompt("Are there two or more fingereprints on the glass? ")
if(E === "yes"){
    score += 100
    console.log("Great info. Let's move on")
}
else if(E === "no"){
    console.log("Noted")
    console.log("Great info. Let's move on")
}
else{
    console.log("Invalid input. Please answer with 'yes' or 'no'");
}
let F = prompt("Are there any suspicious movements? ")
if(F === "yes"){
    score += 50
    console.log("Great info. Let's move on. Almost there")
}
else if(F === "no"){
    console.log("Noted")
    console.log("Great info. Let's move on. Almost there")
}
else{
    console.log("Invalid input. Please answer with 'yes' or 'no'");
}
let G = prompt("Was there any cyanide powder in the perpetrator's pocket? ")
if(G === "yes"){
    score += 750
    console.log("Great info. That's the last question")
}
else if(G === "no"){
    console.log("Noted")
    console.log("Great info. That's the last question")
}
else{
    console.log("Invalid input. Please answer with 'yes' or 'no'");
}
if(score > 1300 && D.trim().toLowerCase() === "yes" && E.trim().toLowerCase() === "yes"){
    console.log(`After all the information you gave, The system can tell that the victim has been certainly murdered`);
}
else if(score > 1300 && (D.trim().toLowerCase() === "no" || E.trim().toLowerCase() === "no")){
    console.log("The system can confirm that there is a strong case for murder but cannot confirm for certain");
}
else{
    console.log("The information given does not indicate that the businessman has been murdered. There is very little chance");
}
console.log(`D: ${D}, E: ${E}, Score: ${score}`);