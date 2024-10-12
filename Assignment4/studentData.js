let studentScore = [
    {
        name : 'Andi',
        score: 90
    },
    {
        name : 'Rudi',
        score: 80
    },
    {
        name : 'Dira',
        score: 100
    }
]
//Finding the highest score
let highestscore = 0
let name = ""
for(let i = 0; i <studentScore.length; i++){
    if(studentScore[i]["score"] > highestscore){
        highestscore = studentScore[i]["score"]
        name = studentScore[i]["name"]
    }
}
console.log(`The highest score in java is ${name} with ${highestscore}`);