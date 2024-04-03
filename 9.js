/**
 * For Loops in Js
 */ 
const prompt = require("prompt-sync")()
// Program to add first n narural numbers

// For Loops 
let sum = 0
let n = prompt("Enter the value of n : ")
n = Number.parseInt(n)
for (let i = 0; i < n; i++){
    sum += (i + 1)
    console.log((i + 1), "+")
}
console.log("Sum of first " + n + " natural number is " + sum)

// For in Loops
let obj = {
    happy: 45,
    sad: 67,
    angry: 89
}
for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}

// For of Loops
for (let b of "Mahmud"){
    console.log(b)
}


