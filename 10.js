const prompt = require('prompt-sync')() // Using Promt in the VS code 
/**
 * While Loops in JS
 * First run the condition than run the block
*/
console.log("-------------Below this code is for while loop--------------")
let n = prompt("Enter the value of n : ")
n = Number.parseInt(n)
let i = 0
while(i<n){
    console.log(i)
    i++
}


/**
 * Do While Loops in JS
 * first run the do block than check the while condition
*/

console.log("----------Below this code is for Do while loop-------------")
let m = prompt("Enter the value of m : ")
m = Number.parseInt(m)
let j = 0
do {
    console.log(j)
    j++
} while(j<m)
