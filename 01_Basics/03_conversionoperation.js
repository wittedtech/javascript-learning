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
