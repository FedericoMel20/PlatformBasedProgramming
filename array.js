//ARRAYS
let data = [10, 20, 30, 40]
// Access Array
console.log(data[2]);

//Change Array Value
data[2] = 100
console.log(data);

//Add array element as the last element
data.push(80)
console.log(data);

//Add array element at the first element
data.unshift(90)
console.log(data);

// Remove Last element
data.pop()
console.log(data);

//Remove first element
data.shift()
console.log(data);

//Mean of the data
let result = 0
for(let i=0; i<data.length; i++){
    result += data[i]
}
console.log(`The mean of the data values is ${result / data.length}`);

let country = ["Indonesia", "India", "Japan", "England", "South Sudan", "Sweden", "Jamaica"]
//Group country by first letter
// ["Indonesia", "India"]
//["Japan", "Jamaica"]
//["Sweden", "South Sudan"]
let countryI = []
let countryJ = []
let countryS = []
for(let i=0; i<country.length; i++){
    if(country[i][0]== "I"){
        countryI.push(country[i])
    }
    else if(country[i][0]== "J"){
        countryJ.push(country[i])
    }
    else if(country[i][0]== "S"){
        countryS.push(country[i])
    }
}
console.log(countryI);
console.log(countryJ);
console.log(countryS);