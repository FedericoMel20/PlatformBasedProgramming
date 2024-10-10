//Using arrays as objects
let studentData = [
    {
        idnumber : 1,
        name : "Annie",
        city : "BANDUNG",
        java : 90,
        python: 75,
        c : 80
    },
    {
        idnumber : 2,
        name : "Bull",
        city : "SUKABUMI",
        java : 80,
        python: 75,
        c : 100
    },
    {
        idnumber : 3,
        name : "Chairil",
        city : "BoGOR",
        java : 100,
        python: 30,
        c : 50
    }
]

//Print the name of the 3rd student
console.log(studentData[2]["name"]);

//Add a student
studentData.push(
    {
        idnumber : 4, 
        name: "Daddy", 
        city : "MALANG", 
        java: 88, 
        python: 30, 
        c: 86
    }
)
console.log(studentData);

//Finding the highest java score
let bjava = 0
let name = ""
for(let i = 0; i <studentData.length; i++){
    if(studentData[i]["java"] > bjava){
        bjava = studentData[i]["java"]
        name = studentData[i]["name"]
    }
}
console.log(`The highest score in java is ${name} with ${bjava}`);

//Finding the total and mean
let total = 0
for(let i = 0; i <studentData.length; i++){
    total += studentData[i]["python"]
}
let mean = total / studentData.length
console.log(`The mean score of python is ${mean}`);

//Finding java scores that are more than
let over70 = studentData.filter(score => score.java > 90)
console.log(over70);

//Printing only the names
let nameover70 = over70.map(score => score.name)
console.log(nameover70);
 

