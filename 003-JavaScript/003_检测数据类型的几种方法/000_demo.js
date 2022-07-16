// 1. typeof
console.log(typeof ""); // string
console.log(typeof 123); //  number
console.log(typeof true); //  boolean
console.log(typeof null); //  object
console.log(typeof undefined); //  undefined
console.log(typeof []); // object
console.log(typeof {}); //  object
console.log(typeof function () {}); //  function
const fn = () => {};
console.log(typeof fn); //  function
const sym = Symbol();
console.log(typeof sym); // Symbol
const theBiggestInt = 9007199254740991n;
console.log(typeof theBiggestInt); // bigint
const alsoHuge = BigInt(9007199254740991);
console.log(typeof alsoHuge); // bigint
console.log('\n');

// 2. instanceof 
console.log(1 instanceof Number);  // false
console.log(new  Number(1) instanceof Number);    // true
// console.log(null instanceof null);
// TODO: null 和 undefined 不能使用 instanceof 判断，会直接报错

console.log('\n');
// 3. constructor
console.log((1).constructor === Number);

function testFn(){}
testFn.prototype = new Array()
let f = new testFn()
console.log(f.constructor === testFn);    // false
console.log(f.constructor === Function);    // false
console.log(f.constructor === Array); // true

console.log('\n');
// 4. Object.prototype.toString.call()
let type = Object.prototype.toString

console.log(type.call(''));
console.log(type.call(sym));
console.log(type.call(alsoHuge));
console.log(type.call(fn));
console.log(type.call(testFn));