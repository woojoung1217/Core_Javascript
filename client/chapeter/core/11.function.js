
/*eslint-disable */
function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}


// 함수 선언
// parameter
function calcPrice(
  priceA,
  priceB,
  priceC = getRandomValue(),
  priceD = getRandomValue()
) {

  // if(!priceD) priceD = 0;

  // priceD = priceD || 0;
  // priceD ||= 0;

  // priceD = priceD ?? 0;
  priceD ??= 0;

  // validation 확인 



  if (!priceA || !priceB) {
    throw new Error('calcPrice 함수의 첫 번째와 두 번째 인수는 필수 입력값 입니다.');
  }

  console.log(priceA + priceB + priceC + priceD);
}



// calcPrice(3000, 300) // argument


function calcRem(rem, num) {

  if (!rem) {
    throw new Error("없어")
  }

  if (typeof rem === 'number') {
    return rem / 16 + "rem";
  } else if (typeof rem === 'string' && !num) {
    let a = parseInt(rem);
    let result = a / 16;
    return result + "rem";
  } else if (typeof num === 'number' && typeof rem === 'string') {
    let a = num;
    let result = parseInt(rem) / a;
    return result + "rem";
  }
}

console.log(calcRem(20));
console.log(calcRem('25px'));
console.log(calcRem('30px', 10));




// function rem(pxValue, base = 16) {

//   if (!pxValue) throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.');

//   typeof pxValue === 'string' && (pxValue = parseInt(pxValue, 10))

//   // if(typeof pxValue === 'string') pxValue = parseInt(pxValue,10);
//   // if(typeof base === 'string') base = parseInt(base,10);

//   return pxValue / base + 'rem'


// }




// //  Test Driven Development (TDD)

// console.assert(rem(20) === '1.25rem')  // '1.25rem'

// console.assert(rem('25px') === '1.5625rem') 



const value2 = func2(3, 7)


const func2 = function (a, b) {
  return a * b;
}


console.log(value2) //222