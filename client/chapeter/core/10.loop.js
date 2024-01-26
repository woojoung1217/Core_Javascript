

// // let sum = 0;

// // while (true) {

// //   let value = +prompt("숫자를 입력하세요.", '');

// //   if (!value) break; // (*)

// //   sum += value;

// // }
// // alert('합계: ' + sum);


// /* ------------ */
// /* For Loop     */
// /* ------------ */



// // 2 ~ 10까지의 짝수 출력하기



// const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

// let i = 0;
// let l = frontEndDev.length;




// // while 문 → for 문 (순환)
// // - 실행 흐름
// // - 순환 중단 또는 이어서 순환
// //   - 조건이 맞을 경우, 이어서(continue) 순환
// //   - 조건: SVG, jQuery는 출력하지 마세요.


// for (let i = 0; i < frontEndDev.length; i++) {
//   if (frontEndDev[i] === 'SVG' || frontEndDev[i] === 'jQuery' || frontEndDev[i] === 'React') continue;

//   console.log("he", frontEndDev[i])
// }



//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)


/* ---------------- */
/* For In Loop      */
/* ---------------- */



const js = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

Object.prototype.nickName = "nickname";

for (let key in js) {
  if (!Object.prototype.hasOwnProperty.call(js, key)) continue;
  console.log(`${key}: ${js[key]}`);
}

let answer = confirm('Are you sure you want to leave?')

console.log(answer);




// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?