//rules for naming variable/

// you can't start with a number
// example :-
// 1value (invalid)
//value 1(valid)

var value1 = 10;
console.log(value1 / 2);
console.log(value1 * 2);
console.log(value1 + 2);
console.log(value1 ** 2);
console.log(value1 ** 0.6);

// you can use underscore _ or dollar $ symbol
// first_name
// _firstname
var _firstname = "hello1"
var $firstname = "hello2"
var first_name = "hello3"
var first$name = "hello4"
console.log(_firstname);
console.log($firstname);
console.log(first_name);
console.log(first$name);

//you canot use spaces between
var first_name = "snake_case" //snake_case writing
var firstName = "camelCase"   // camelCase writing 
console.log(firstName);
console.log(first_name);

//convention
//start with small letters and camelCase