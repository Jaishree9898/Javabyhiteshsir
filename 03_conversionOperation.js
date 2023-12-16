// data-types conversion

let score = "30abc";
console.log(typeof score);   /*   or  console.log(typeof (score));*/

let valueInNumber=Number(score);  /* because of the datatype Number*/
console.log(valueInNumber); /* NaN-not a number */

let isLoggedIn="hi";
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// score = "30"
// console.log(typeof score);   

// let value = Number(score)s
// console.log(typeof value);

// value = Number("30abc")s
// console.log(typeof value);