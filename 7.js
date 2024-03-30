// conditional expression in JS
const prompt = require('prompt-sync')();
const alert = require('prompt-sync')();

let a = prompt("Enter your age : ")
a = Number.parseInt(a)
if (a>18){
    alert("This is a valid number")
}