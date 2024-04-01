// conditional expression in JS
const prompt = require('prompt-sync')();
const alert = require('prompt-sync')();

let age = prompt("Enter your age : ")
age = Number.parseInt(age)
if (age>18){
    alert("Great! You can drive car.")
}
else if(age<18 && age>=9){
    alert("You can drive car from your 18.")
}
else{
    alert("You are a kid.")
}
console.log("Done")
console.log("You can", (age<18? "not drive" : "drive"), "the car")