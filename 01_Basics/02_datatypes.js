// Javascript is a backward compatible language -> which means no matter how many new versions come js code will always be supporting its previous onemptied.
// But if we want to use only the newest version and strictly follow its rules we can use "use strict" keyword.

"use strict"; //treat all js code as newer version.

// alert(3 + 3); // alert is supported directly in the browser but here we are not executing sjs file using nodejs, not browser.
// In nodejs alert is present but is used differently with different configurations.

// Must follow the rules of Code Readability.
// mdn_webdocs are good documentations for Javascript : https://developer.mozilla.org/en-US/docs/Web/JavaScript (Managed by Mozilla)
//ECMA International : https://ecma-international.org/ is the organisation. Who defines the standards for JavaScript.
console.log(3 + 3);

// Datatypes of Javascripts are limited.

let name = "harshit"; //string
let age = 18; // number
let isBoolean = false; //boolean
let state; //undefined

/*
datatype  => range
number  => 2 to power 53
bigInt
string  => ""
boolean  => true/false
*/

// null  => standalone value -> can be assigned to variables
// undefined => default value stored in the uninitialised variables.
// symbol => used to define uniqueness mostly used in react js

// object => this is also a datatype but of a special type.

console.log(typeof isBoolean); //boolean
console.log(typeof age); //number

console.log(typeof null); //object
console.log(typeof undefined); //undefined

// now we have noticed one thing that when we try to get the type of "null" it gives us a object. Some says its a flaw in js and this behaviour
// of javascript leads to lot of error because null doesn't have a specific datatype.
