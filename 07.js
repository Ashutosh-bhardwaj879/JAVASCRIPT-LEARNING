// trim()
// toUpperCase()
// toLowerCase()
// slice

let firstName = "    harshit    "
console.log(firstName);
console.log(firstName.length);

firstName = firstName.trim();
console.log(firstName);
console.log(firstName.length);

let newName = firstName.trim();
console.log(newName);
console.log(newName.length);
// output
//     harshit    
// 15
// harshit
// 7
// harshit
// 7
let capitalize =  firstName.toUpperCase();
console.log(capitalize); 

let decapitalize = capitalize.toLowerCase();
console.log(decapitalize);

// slicing
let newString = firstName.slice(0, 4);
console.log(newString);
newString = firstName.slice(1);
console.log(newString);