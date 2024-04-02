// Chapter 2 Practice set 
const prompt = require('prompt-sync')();
const alert = require("prompt-sync")();

// Question 1: Use logical operator to find whether the age of a person lies between 10 to 20?
/**
 * Solution 1
let age = prompt("What is your age? : ")
age = Number.parseInt(age)
 if (age>10 && age<20){
    console.log("Your age lies between 10 to 20")
}
else{
    console.log("Your age is not between 10 to 20")
}
 */

// Question 2: Demonstrate the use of switch case statements in JavaScript.
let age = prompt("What is your age? : ")
// age = Number.parseInt(age)
switch(age){
    case '12':
        console.log("Your age is 12")
        break
    case '13':
        console.log("Your age is 13")
        break
    case '14':
        console.log("Your age is 14")
        break
    case '15':
        console.log("Your age is 15")
        break
    default:
        console.log("Your age is not special")
}

// Question 3: Write a JavaScript program to find whether a number is Divisible by 2 , 3 and 4.
let num = prompt("What is the number? : ")
num = Number.parseInt(num)
if(num % 2 == 0 && num % 3 == 0 && num % 4 == 0){
    console.log("Your number is divisible by 2 , 3 and 4")
}
else{
    console.log("Your number is not divisible by 2 , 3 and 4")
}
// Question 4: Write a Js program to find whether a number is Divisible by either 2 or 3.
let num1 = prompt("What is the new number? : ")
num1 = Number.parseInt(num1)
if(num1 % 2 == 0){
    console.log("Your number is divisible by 2")
}
else if(num1 % 3 == 0){
    console.log("Your number is divisible by 3")
}
else{
    console.log("Your number is not divisible by 2 and 3")
}
// Question 5: Print "You can drive" or "You can't drive" based on age being greater than 18.
let age1 = prompt("What is Your age? : ")
let a = age1>18? "You can drive" : "You can't drive"
console.log(a) 