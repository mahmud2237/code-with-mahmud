// Chapter 1 -> Question 1 => Create a variable of type string and try to add a number to it.
let a = "Jerry";
let b = 6;
console.log(a + b);

// Chapter 1 -> Question 2 => Use typeof operator to find the datatype of the string in last Question.
console.log(typeof (a + b));

// Chapter 1 -> Question 3 => Create a const object in javaScript. Can you change it to hold a number later?
const a1 = {
    name: "Mahmud",
    age: 23,
    isPrincipal: false
}
a = 56;  // so we can't change it to hold a number or whatever we want to change it later. It's not possible.

// Chapter 1 -> Question 4 => Try to add a new key to the const object in problem 3 were you able to do it? if yes, than print then print the const.
a1['friend'] = "Maruf";
console.log(a1);