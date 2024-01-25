/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?


// let didWatchMovie = 'no';

// 영화 볼거니?

// let goingToWatchMovie = 'yes';


// console.log(didWatchMovie === 'no' ? '나랑보러갈래' : null);


// let data = 'lateNights';


// if (data === 'lateNights') {
//   console.log("자야지");
// } else if (data === "morning") {
//   console.log('wake up');
// }

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

const num = parseInt(Math.random() * 6 + 1)

console.log(num)


switch (num) {
  case 0: console.log('일'); break;
  case 1: console.log('월'); break;
  case 2: console.log('화'); break;
  case 3: console.log('수'); break;
  case 4: console.log('목'); break;
  case 5: console.log('금'); break;
  case 6: console.log('토'); break;
}/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm("영화 봤니?");

  // 영화 볼거니?

  if (!didWatchMovie) {
    let goingToWatchMovie = confirm("영화 볼거야?");

    if (goingToWatchMovie) {
      let withWho = prompt("누구랑 볼거니?");

      if (withWho === "너") {
        console.log("어머..☺️");
      } else if (withWho === "엄마") {
        console.log("효자구나!");
      } else {
        console.log("내가 아니네..?🤔");
      }
    } else {
      console.log("꼭 봐 재밌어");
    }
  } else {
    console.log("어 나 봤어..");
  }
}

// 조건부 연산자
let didWatchMovie = "no";
let goingToWatchMovie = "yes";

// const a = condition ? value1 : value2;

let message = didWatchMovie.includes("yes")
  ? "그거 재밌더라"
  : goingToWatchMovie.includes("yes")
    ? "너무 재밌겠다!!"
    : "난 별로인데...";
console.log(message);
// 삼항식

// 멀티 조건부 연산자 식

function render(node, isActive) {
  const template = /* html */ `
      <div>${isActive ? "안녕!!!!" : "잘가~~!!!"}</div>
    `;
  node.insertAdjacentHTML("beforeend", template);
}