// sayHi();

function sayHi() {
  console.log("Hi!");
}

let array = [1, 2, 3, 4, 5];
// array.forEach(function (value, index) {
//   console.log(value, index);
// });

// array.map(function (value, index) {
//   console.log(value, index);
// });

// arrow function

const fun = () => {
  console.log("fun");
};

// fun();

const addTwoNumber = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwoNumber(2, 3));

// iife
(() => {
  console.log("iife");
})();

((num1, num2) => {
  console.log(num1 + num2);
})(1, 2);
