// console.log("Hello World!");

var num;
let number = undefined;
const age = 20;

let n, a, b, c;
n = 10;
// console.log(typeof 2);
// console.log(typeof num);
// console.log(typeof number);

let marks = 20;
let marks2 = 21;

let result = marks + marks2;
// console.log(result);

// Operators HW

// conditional statement
// if ("") {
//   console.log("Age is greater than 20");
// } else {
//   console.log("Age is either 20 or below");
// }

// let array = [];
// if (array) {
//   console.log("Non Empty Array");
// } else {
//   console.log("Empty Array");
// }

//

// ==
// ===

// console.log(1 == 1);
// console.log(1 == "1");
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(typeof null);
// console.log(typeof undefined);

let day = 2;

// if (day == 1) {
//   console.log("Monday");
// } else if (day == 2) {
//   console.log("Tuesday");
// } else if (day == 3) {
//   console.log("Wednesday");
// } else if (day == 4) {
//   console.log("Thursday");
// } else if (day == 5) {
//   console.log("Friday");
// } else if (day == 6) {
//   console.log("Saturday");
// } else if (day == 7) {
//   console.log("Sunday");
// } else {
//   console.log("Wrong input");
// }

// Falsy values
// false
// 0
// -0
// ""
// null
// undefined
// NaN

// Thruthy values
// true
// all number except 0
// " "
// []
// {}

//
// if (day == 1) console.log("Monday");
// console.log("first");

//

// condition ? true block : false block;

marks = 30;

// if (marks == 100) {
//   result = "pass";
// } else {
//   result = "fail";
// }

// if (marks == 100) result = "pass";
// else result = "fail";

result = marks == 100 ? "Pass" : "Fail";

// <= 30 : third
// <= 50 : second
// <= 60 : first

// if (marks <= 30) {
//   result = "Third";
// } else if (marks <= 50) {
//   result = "Second";
// } else {
//   result = "First";
// }

result = marks <= 30 ? "Third" : marks <= 50 ? "Second" : "First";

// console.log(result);

let x;

// if (x) result = x;
// else result = 50;

result = x | 50;
// console.log(result);

// array
let array = [];
array = [1, 2, 3, "Purnea", null, undefined, [], {}];

array[4] = "Bihar";
// console.log(array[0]);

array.splice(2, 0, 10);
// console.log(array);

// console.log(array.length);

// loop
// for(initialization; conditon; inc/dec){

// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i * 17);
// }

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// for (let value of array) {
//   console.log(value);
// }

// array.forEach(function (item) {
//   console.log(item);
// });

// function
function sayHi() {
  console.log("Hi");
}

// sayHi();

// function addTwoValue(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// let sum = addTwoValue(2, 3);
// console.log(sum);

// function addTwoValue(num1 = 0, num2, num3 = 3) {
//   return num1 + num2 + num3;
// }

// let sum = addTwoValue(1, 2);
// console.log(sum);

// function addMany(...number) {
//   let res = 0;
//   for (let num of number) {
//     // res = res + num;
//     res += num;
//   }

//   return res;
// }

function addMany(...number) {}

let res = addMany(2, 3, 4, 5, 6, 4, 5, 6, 7);

// console.log(res);
// function test(num1, cb) {
//   num1++;
//   let sec = "123";
//   cb(sec);
// }

// function callBack(sec) {
//   console.log(sec);
// }

// test(10, callBack);

let arr = [2, 3, 4, 5, 6, 4, 5, 6, 7];

function getValue(num, index) {
  console.log(num, index);
}

let abc = function (n, i) {
  console.log(n, i);
};

// arr.forEach(getValue);
arr.forEach(abc);
