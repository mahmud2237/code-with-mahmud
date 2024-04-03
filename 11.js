/**
 * Functions in JS
 * Use of Modern JavaScript Function 
 */
let a = 1
let b = 2
let c = 3
/**
console.log("One Plus Average of a and b is : ", 1 + (a + b)/2)
console.log("One Plus Average of b and c is : ", 1 + (b + c)/2)
console.log("One Plus Average of c and a is : ", 1 + (c + a)/2)
*/
// Let's Functions do this repeated task...
function onePlusAvg(x, y){
    return 1 + (x + y)/2
}
console.log("One Plus Average of a and b is : ", onePlusAvg(a, b))
console.log("One Plus Average of b and c is : ", onePlusAvg(b, c))
console.log("One Plus Average of c and a is : ", onePlusAvg(c, a))

// Use of Modern JS Function
function hello = () =>{
    console.log("Hello World")
    return "Hi Buddy"
}
console.log(hello())

function sum = (p, q) => {
    return p + q
}
console.log(sum(1, 2))