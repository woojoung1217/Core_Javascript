

// 객체 병합

// const user = {
//   name: '1',
//   arg: '2'
// }

// const me = {
//   age: 34,
//   job: 'zombie'
// }

// const concat = { ...user, ...me }

// console.log(concat)

/* --------------------- - -------------------- */
/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;



// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialog = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  ["max-width"]: 800,
  height: '40vh',
  ["min-height"]: 280,
  transform: 'translate(-50%,-50%)'
};



const template = /* html */`
  <nav>
    <ul class="menuList">
      <li>menu01</li>
      <li>menu02</li>
      <li>menu03</li>
      <li>menu04</li>
    </ul>
  </nav>
`



// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
//  authorization
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한


let authUser = {
  uuid: crypto.randomUUID(),
  name: 'tiger',
  email: 'seonbeom2@gmail.com',
  isSignIn: false,
  permission: 'paid' // paid | free
};


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.


// getter
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);

// setter
console.log(authUser.permission = 'free');





// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

//  getter 
console.log(authUser['name']);
console.log(authUser['uuid']);
console.log(authUser['email']);
console.log(authUser['permission']);

// setter
console.log(authUser['isSignIn'] = true);



// 해당 객체에 키값의 여부를 확인하는 방법 => in 



// console.log( 'name' in authUser );


for (let key in authUser) {
  console.log(key);
}


function removeProperty() {

}