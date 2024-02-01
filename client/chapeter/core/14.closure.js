const first = document.querySelector('.first');



let isClcked = false;

function handleClick() {

  !isClcked ? document.body.style.backgroundColor = 'orange' : document.body.style.backgroundColor = 'white';

  isClcked = !isClcked;
}

first.addEventListener('click', handleClick)

