
// function sum(a, b) {
//   let result = a + b;
//   return result
// }

// let a = sum(3, 5)

// console.log(a)


function first() {
  let x = 10;

  function second() {
    let y = 20;

    return x + y
  }

  return second();
}

let res = first()