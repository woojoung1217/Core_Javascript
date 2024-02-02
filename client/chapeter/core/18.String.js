// /* -------------------- */
// /* String Type          */
// /* -------------------- */

// let message = 'Less is more.';


// // length 프로퍼티
// let stringTotalLength = message.length;


// // 특정 인덱스의 글자 추출
// let extractCharacter = message[3];


// // 문자열 중간 글자를 바꾸는 건 불가능 
// // (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
// let immutableChangeCharacter;

// // message[3]== a //xx

// // 부분 문자열 추출
// let slice = message.slice();

// let subString = message.substring(2, 5);


// // let subStr; legercy


// // 문자열 포함 여부 확인
// let indexOf = message.indexOf('hi');
// // -1 


// let lastIndexOf;
// let includes;
// let startsWith;
// let endsWith;


// // 공백 잘라내기
// let trimLeft;
// let trimRight;
// let trim;


// // 텍스트 반복
// let repeat;


// // 대소문자 변환
// let toLowerCase;
// let toUpperCase;


// // 텍스트 이름 변환 유틸리티 함수
// let toCamelCase;
// let toPascalCase;


// /* ------------------------------ */
// /* Array's Methods                */
// /* ------------------------------ */

// // Array.isArray

// /* 요소 순환 ---------------------------- */

// // forEach

// /* 원형 파괴 ----------------------------- */

// // push
// // pop
// // unshift
// // shift
// // reverse
// // splice
// // sort

// /* 새로운 배열 반환 ------------------------ */

// // concat
// // slice
// // toSorted
// // toReversed
// // toSpliced
// // map

// /* 요소 포함 여부 확인 ---------------------- */

// // indexOf
// // lastIndexOf
// // includes

// /* 요소 찾기 ------------------------------ */

// // find
// // findIndex

// /* 요소 걸러내기 --------------------------- */

// // filter

// /* 요소별 리듀서(reducer) 실행 -------------- */

// // reduce
// // reduceRight

// /* string ←→ array 변환 ------------------ */

// // split
// // join'

// const people = [
//   {
//     id: 0,
//     name: '박가희',
//     age: 25,
//     job: '명탐정코난 범인',
//     imageSrc: 'FAkq31'
//   },
//   {
//     id: 1,
//     name: '김보미',
//     age: 64,
//     job: '짜요짜요 마케터',
//     imageSrc: 'Gakz34'
//   },
//   {
//     id: 2,
//     name: '한태희',
//     age: 13,
//     job: '삐돌이',
//     imageSrc: 'Fkzoq81'
//   },
//   {
//     id: 3,
//     name: '이원명',
//     age: 81,
//     job: '이도령',
//     imageSrc: 'Tq9z1i'
//   }
// ]



// const totalAge = people.reduce((acc, cur) => {
//   return acc += cur.age
// }, 0)

// console.log(totalAge);

/* ----------------------- */
/* Try Catch               */
/* ----------------------- */


// try ... catch 동작 알고리즘
// 1. try { ... } 코드 실행
// 2-1. 오류가 발생하지 않은 경우, 내부 코드가 실행 됨 (catch 블록 무시)
// 2-2. 오류가 발생했다면, try 코드 중단 catch 블록으로 흐름이 넘어 감


// JSON : Javascript Object Notation


try {

  // console.log(value);

} catch (err) {

  console.log(err.name);
  console.log(err.message);

}






let data = JSON.stringify({
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
})

console.log(data);


try {
  const user = JSON.parse(data);

  if (!user.value) {
    throw new Error('해당 키 값이 존재하지 않습니다.')
  }


} catch (err) {

  console.log('JSON Error : ' + err.message);

  document.body.innerHTML = '404 not found 🤔'

}














// JavaScript 엔진은 코드를 읽고 난 후 코드를 실행
// 그러므로 try ... catch 문은 유효한 코드에서만 오류를 처리할 수 있음
// 이러한 오류 유형을 "런타임 오류" 또는 "예외(exception)"라고 부름


// try ... catch는 동기적으로 동작하므로 비동기 처리 과정 내부에서 사용해야 함


// 오류 객체(Error Object)
// - name, message, stack 정보 제공


// 직접 오류 객체 생성
// throw 연산자는 오류 객체를 생성할 때 사용 됨
// 생성 가능한 오류 객체
// - Error
// - TypeError
// - SyntaxError
// - ReferenceError


// finally 절
// 오류가 있던, 없던 상관없이 항상 실행
// try ... catch를 빠져나가는 어떠한 경우에도 항상 실행