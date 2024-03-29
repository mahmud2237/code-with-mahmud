/*
 * Operators and Expressions in JS
 * 1. Operators => +, -, *, /, **, %, ++, --
 * 2. Expressions => 
*/
console.log("Operator in JS")
// a and b are assignment operators
let a = 15  
let b = 10
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a * b = ", a * b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("a++ = ", a++)
console.log("b-- = ", b--)

// comparison operators
let comp1 = 8
let comp2 = '8'
console.log("comp1 == comp2 is", comp1 == comp2)
console.log("comp1 === comp2 is", comp1 === comp2)   // === also check the data type so give us the output false
console.log("comp1 < comp2 is", comp1 < comp2)
console.log("comp1 != comp2 is", comp1 != comp2)
console.log("comp1 !== comp2 is", comp1 !== comp2)

// logical operators
let x = 5
let y = 6
console.log(x < y && x == 5)  // And operators will be true if all the conditions are true 
console.log(x > y || x == 5)   // Or operator will be true if one of the condition will true. or all false than output will be false
console.log(!false)  // Not operator 
console.log(!true)


