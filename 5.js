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

// Chapter 1 -> Question 4 => Try to add a new key to the const object in problem 3 were you able to do it? if yes, then print the const.
a1['friend'] = "Maruf";
a1['name'] = "Noyon";
console.log(a1);

// Chapter 1 -> Question 5 => Write a JS program to create a word meaning dictionary of 6 words.
const dict = {
    appreciate: "recognizes the full worth of...",
    aver: "To assert or affirm with confidence",
    telluric: "Proceeding from the earth or soil.",
    cordial: "To express gratitude or thanks.",
    fantastic: "Excellent or outstanding.",
    yakka: "Work, especially hard work"
}
console.log(dict.aver)
console.log(dict.yakka)