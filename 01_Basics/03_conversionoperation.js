let score = 33;
console.table([score, typeof score]);
let num = "22";
let convertedNum = Number(num);
console.table([num, typeof num, convertedNum, typeof convertedNum]);

let mixNum = "33abc";
let convertedMixNum = Number(mixNum);
console.table([mixNum, typeof mixNum, convertedMixNum, typeof convertedMixNum]);
// When a string variable with numeric value is converted into number the typeof converted value will be "number" but value will be "NaN => Not a Number"

let n = undefined;
let converted_N = Number(n);
let string_N = String(n);
//when a undefined value variable is converted into Number its value become "NaN" and typeOf become "number".
// but in case of conversion to string the value becomes String "undefined".
console.table([n, converted_N, typeof converted_N, string_N, typeof string_N]);

let isBool = true;
let converted_IsBool = Number(isBool);

console.table([
  isBool,
  typeof isBool,
  converted_IsBool,
  typeof converted_IsBool,
]);
// when a boolean value is converted into "Number" then "true" => 1, "false" => 0
// converted into strings they becomes String Values "true"/"false".

let negativeNum = "";
let converted_boolean_score = Boolean(score);
let converted_boolean_StringNum = Boolean(num);
let converted_boolean_negativeNum = Boolean(negativeNum);
console.table([
  converted_boolean_score,
  typeof converted_boolean_score,
  converted_boolean_StringNum,
  typeof converted_boolean_StringNum,
  negativeNum,
  converted_boolean_negativeNum,
  typeof converted_boolean_negativeNum,
]);
// when converting into boolean any numberic/string value other than 0/false/"" becomes "true".

// ****************************************** Operations In JavaScript**************************************************

let op_Num = 3;
let neg_OpNum = -op_Num;
console.table([op_Num, neg_OpNum]);

// List of Basic Operation in JS
console.table([
  2 + 2, // addition
  2 - 2, //substraction
  2 * 2, //multiplications
  2 ** 3, // raise to the power(2 raise to the power 3 i.e. 2*2*2)
  2 / 2, //division
  3 % 2, //modulous
]);

// Some special operation rules and output of JavaScript
let str = "Hello";
let str1 = " Harshit";

console.log(str + str1); // In this strings will be simply concatinated

// But Javascript gets tricky when its come to operation on different datatypes.
// For Example: String + Number
// Number + String
// So let's see how javascript does

console.table(["1" + 2, 1 + "2", "1" + 2 + 2, 1 + 2 + "2"]);
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │ 0       │ '12'   │
// │ 1       │ '12'   │
// │ 2       │ '122'  │
// │ 3       │ '32'   │
// └─────────┴────────┘

// Now the output is bit confusing
// 1. when adding first string then number result is simply the cancatinated output like both of them were string.
// 2. same goes for the 2nd output when operation is performed in two digit and any one of them is string then other itself bcomes string.
// 3. Now when operation is performed in three values if the first one is string all others itself becomes string because the execution
// started from left and it started converting others accordingly as well.
// 4. Now in the last output when the first value is Number and other one is number as well and last one is string first two gets added
//  as normal Numbers and the third one becomes concainated

// NOW LET'S SEE WHAT HAPPENS WITH THE OTHER OPERATIONS.
console.table(["1" - 2, 1 - "2", "1" - 2 - 2, 1 - 2 - "2"]);
// OUTPUT :
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │ 0       │ -1     │
// │ 1       │ -1     │
// │ 2       │ -3     │
// │ 3       │ -3     │
// └─────────┴────────┘

// IN this case all the values are treated as Numbers.

console.table(["1" * 2, 1 * "2", "1" * 2 * 2, 1 * 2 * "2"]);

// OUTPUT:
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │ 0       │ 2      │
// │ 1       │ 2      │   again all values are treated as numbers.
// │ 2       │ 4      │
// │ 3       │ 4      │
// └─────────┴────────┘

// NOTE: Best Code Practice is to Use Parantheses () to seperate values as per the calculations

console.log(+true);
console.log(+"");

// Output for +true will be 1 but if true+ then it will throw error
// Output for +"" is 0.
