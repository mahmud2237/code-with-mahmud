// primitive and objects(Non-Primitive) data type => There are 7 types of primitive data types 
// They are null, number, boolean, bigint, string, symbol, undefined (nn bb ss u) -> Primitive in Js 
let a = null;  // null
let b = 345;   // number
let c = true;   // boolean
let d = BigInt("567") + BigInt("3");   // BigInt
let e = "Mahmud";   // string
let f = Symbol("I am a nice symbol");  // symbol
let g = undefined;   // undefined
console.log(a, b, c, d, e, f, g);
console.log(a, "is", typeof a);
console.log(b, "is", typeof b);
console.log(c, "is", typeof c);
console.log(d, "is", typeof d);
console.log(e, "is", typeof e);
console.log(f, "is", typeof f);
console.log(g, "is", typeof g);

// Objects or Non-Primitive in Js
const item = {
    "Mahmud" : true,
    "Hasan" : false,
    "Ahsan" : 67,
    "Saju" : undefined
}
console.log("in items Mahmud's value is", item["Mahmud"]);