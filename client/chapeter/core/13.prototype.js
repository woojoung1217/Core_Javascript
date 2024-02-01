// // // /* eslint-disable */

// // // /* ------------------- 생성자함수 ------------------ */

// // // function Animal() {
// // //   this.legs = 4;
// // //   this.tail = true;
// // //   this.stomach = [];

// // //   this.getEat = function () {
// // //     return this.stomach;
// // //   }

// // //   this.setEat = function (food) {
// // //     this.prey = food;
// // //     this.stomach.push(food);
// // //   }
// // // }

// // // const a = new Animal();

// // // function Tiger(name) {

// // //   this.name = name;
// // //   this.hunt = function (targets) {
// // //     this.prey = targets
// // //     return `${targets} 에게 천천히 접근`
// // //   }
// // // }

// // // Tiger.prototype = a;

// // // const 한라산호랑이 = new Tiger('백호');


// // // /* ------------- sum, call , aplly ------------ */


// // // function sum(a, b) {
// // //   console.log(this);
// // //   console.log(a + b)
// // // }

// // // sum.call(1, 10, 20)

// // // sum.apply(1, [10, 20])




// // // const aa = sum.bind(a, 10, 0)

// // // aa()

// // // // call = this 를 반환 

// // const shopOrder = {
// //   date: '2023. 12. 06',
// //   tableIndex: 5,
// //   menu: [
// //     { name: '통 새우 돈까스', price: 13000, count: 2 },
// //     { name: '치즈 돈까스', price: 10000, count: 1 },
// //   ],
// // };




// // let total = 0;

// // shopOrder.menu.forEach((xxx) => {
// //   console.log(xxx);
// // })


// // 생성자 함수 생성  = 오브젝트를 여러개 복사해서 찍어 내고 싶을 떄 쓰는 기계 

// function Champion() {
//   this.q = 'strike'
//   this.w = 'snowball';
// }

// Champion.prototype.name = 'League of Legends'
// // 챔피언 기계에 유전으로 name 을 추가 

// let nunu = new Champion()


// // nunu 라는 변수에 따로 name 값을 지정 해준적이 없지만 없다면 부모까지 뒤져서 찾음


// // console.log('nunu have :', nunu.name); // nunu have : League of Legends


// let arr = [4, 3, 2] // 리터럴 
// arr.sort() // 2,3,4
// // arr.length()
// let arr2 = new Array(4, 2, 1) // 컴퓨터 방식

// // 이게 왜 가능한가? 우린 sort or length 메소드 추가한적이 없는데
// // sort 등 사용할 수 있는 이유는 부모유전자에 기록되어 있다.

// console.log(Array.prototype); // 이거 출력해 보면 알 수 있음

// Array.prototype.woojoung = function () {
//   return this.map((item) => item + 10);
// }

// let items = [1, 2, 3];
// let incrementedItems = items.woojoung();

// console.log(incrementedItems);

// let items2 = [10, 20, 30];

// let inc = items2.woojoung();

// console.log(inc);








// function Champion(q, w, e, r) {
//   this.q = q;
//   this.w = w;
//   this.e = e;
//   this.r = r;
// }

// let nunu = new Champion('strike', 'kill', 'snow', 'aultimate');


// let garen = new Champion(...['strike', 'kill', 'snow', 'aultimate'].reverse());

// console.log(nunu);
// console.log(garen);

class Champion {
  constructor(q, w, e, r) {
    this.q = q;
    this.w = w;
    this.e = e;
    this.r = r;
  }
}

let garen = new Champion('strike', 'kill', 'snow', 'aultimate');

console.log(garen);