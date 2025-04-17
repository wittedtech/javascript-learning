// comparisons of non-similar datatype values in js is very unpredictable. That's why we should always convert values in similar types then compare for the predictable results.

console.table([null > 0, null == 0, null >= 0]);
// OUTPUT:
// ┌─────────┬────────┐   REASON: The reason is that an equality check == and comparison >, <, >=, <= work differently.
// │ (index) │ Values │           Comparisons convert null to a number, treating it as 0.
// ├─────────┼────────┤           That's why null>=0 is true and null > 0 and null == 0 is false.
// │ 0       │ false  │
// │ 1       │ false  │
// │ 2       │ true   │
// └─────────┴────────┘

console.table([undefined == 0, undefined > 0, undefined >= 0]);

// OUTPUT:                              In this case comparison operators tried converting it as number but undefined is not even a value that's why all are false.
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │ 0       │ false  │
// │ 1       │ false  │
// │ 2       │ false  │
// └─────────┴────────┘

// NOTE : We should generally avoid this type of comparisons.

// HERE COMES '===' triple equal comparator

console.log("2" === 2);

// triple equal is a strict value comparison operator and it matches the content as well as datatype.
// That's why here "2" === 2 is false.
