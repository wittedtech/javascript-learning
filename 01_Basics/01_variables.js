const x = 1;
let y = "1234567";
var z = "adsjv";
a = "CKTD";

// x = 2;  ->  Could Not reassign to a const variable.
y = "New 123";
z = "Harshit";
a = "Noida";
console.log(bb);
if (true) {
  let aa = 2;
  var bb = 4;
  y = 12;
  z = 13;
}

aa = 3;
bb = 5;
/*
"var" :- variables declared using var keyword are not bounded inside a scope (by scope we mean {} these curly braces either with if(condition){This is if condition scope}).
--> This is why we should not declare variable in javascript using var keyword. Instead we will use "let" Keyword.
Main Reason Behind why var keyword was not bounded in any scope is because Javascript have a feature/power known as hoisting(All variable declarations are moved on top 
inside a execution environment).

Best Practice: Use "const" & "let" keyword to declare varibales in javascript.

"var" will give "undefined" if you try to access the variable before intializing the value.
but "let" will throw ReferenceError
*/

console.log(x);
console.table([x, y, z, a, aa, bb]);
