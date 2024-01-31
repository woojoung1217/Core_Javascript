/* eslint-disable */

/* ------------------- 생성자함수 ------------------ */

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];

  this.getEat = function () {
    return this.stomach;
  }

  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  }
}

const a = new Animal();

function Tiger(name) {

  this.name = name;
  this.hunt = function (targets) {
    this.prey = targets
    return `${targets} 에게 천천히 접근`
  }
}

Tiger.prototype = a;

const 한라산호랑이 = new Tiger('백호');


/* ------------- sum, call , aplly ------------ */


function sum(a, b) {
  console.log(this);
  console.log(a + b)
}

sum.call(1, 10, 20)

sum.apply(1, [10, 20])




const aa = sum.bind(a, 10, 0)

aa()

// call = this 를 반환 
