const prompt = require("prompt-sync")()

// working with strings
let name = "Mahmud"
console.log(name.length)
let newName = prompt("Write a new name: ")
console.log("Your newName's length is:", newName.length)

// working with Modern JavaScript backtics for print
let actress1 = "Purnima"
let actress2 = "Porimoni"
actress = `${actress1} and ${actress2} are not the same actress`   // This is called String interpolation. We can insert variable directly in it.
console.log(actress)

// working with Escape Sequence Characters
let fruit = 'Bana\'na'
console.log(fruit)