/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// const resultX = calcTotal(10000, 8900, 1360, 2100);
// const resultY = calcTotal(21500, 3200, 9800, 4700);
// const resultZ = calcTotal(9000, -2500, 5000, 11900);

// // console.log(resultX);
// // console.log(resultY);
// // console.log(resultZ);


// // 함수 선언 → 일반 함수 (표현)식
// // 함수안에서 모든 인자에 접근가능한 arguments
// let calculateTotal = function (a, b, c) {
//   // let res = 0;
//   // let total = 0;
//   // // for (let i = 0; i < arguments.length; i++) {
//   // //   total += arguments[i]
//   // // }
//   // // console.log(res)

//   // for (let items of arguments) {
//   //   total += items
//   // }

//   // return total

//   // 방식1
//   // arguments.__proto__ = Array.prototype;

//   // arguments.forEach(function (item, index) {
//   //   console.log(item)
//   // })

//   //방식 2

//   // const arr = Array.from(arguments)
//   // let total = 0;
//   // arr.forEach((item, index) => {
//   //   total += item
//   // })

//   // console.log(total)


//   //방식 3
//   // const arr = [...arguments];
//   // let total = 0;
//   // arr.forEach(function (item, index) {
//   //   total += item;
//   // });




// };

// calculateTotal(10, 20)




// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;


// 콜백 함수 (표현)식
let callbackFunctionExpression;


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;


// let pow = (x, n) => {
//   let result = 1;
//   for (let i = 0; i < n; i++) result *= x;
//   return result;
// }
// console.log(pow(2, 3))


// const repeat = (word, times) => {
//   for (let i = 0; i < times; i++) {
//     console.log(word)
//   }
// }
// repeat('hello', 3)

// const repeatExpression = (expression, times) => {
//   return Array(times).fill(null).reduce((acc) => {
//     return acc + expression;
//   }, "")
// }


