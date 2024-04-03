/**
 * Loops in Js
 * -> For loops
 * -> 
 */ 
const prompt = require("prompt-sync")()
// Program to add first n narural numbers
let sum = 0
let n = prompt("Enter the value of n : ")
n = Number.parseInt(n)
for (let i = 0; i < n; i++){
    sum += (i + 1)
    console.log((i + 1), "+")
}
console.log("Sum of first " + n + " natural number is " + sum)



