console.log("JavaScript code 3: var, let and const")

// consequences using var is below...nowadays var isn't using in Modern JavaScript Or ES6. So, always work with let and const.....
var a = 45;
var b = "Harry";
var c = null;
var d = undefined;
{
    var b = "Very";
    console.log(b);
}
console.log(b , "---> What! So look at this problem using var");

// using let....
let e = "carry";
{
    let e = "marry";
    console.log(e);
}
console.log(e);

// using const....
const f = "jerry";
{
    const f = "farry";
    console.log(f);
}
console.log(f);