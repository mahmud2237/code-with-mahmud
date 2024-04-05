const prompt = require("prompt-sync")()
/**
 * Chapter 3 Practice set
 */
// 1. Write a Js program to print the marks of a student in an object using for loop
let marks = {
    Mahmud: 90,
    Noyon: 70,
    Maruf: 44,
    Rahul: 30
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
// 2. Write the program in Question 1 using for in loop
for (let j in marks){
    console.log("The Marks of " + j + " are " + marks[j])
}
// 3. Write a Program to print "Try again" until the user enters the currect number
let currectNumber = prompt("Enter Your desired currect number : ")
let i
while(i != currectNumber){
    i = prompt("Guess the currect number => ")
    console.log('Try again')
}
console.log("Good Job! You have Entered the currect Number")
// 4. Write a function to find mean of 5 number
function mean(a, b, c, d, e){
    return (a + b + c + d + e) / 5;
}
a = 1
b = 2 
c = 3
d = 4
e = 5
console.log(mean())
