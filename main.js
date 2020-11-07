let decreaseBtn = document.querySelector("#button-decrease");
let increaseBtn = document.querySelector("#button-increase");
let counter = document.querySelector("#counter");
let inputNum = document.querySelector('#num');
// let count = 0;

decreaseBtn.addEventListener("click", () => {
  // count--;
  counter.innerHTML = parseInt(counter.innerHTML) - parseInt(inputNum.value);
  inputNum.value = parseInt(inputNum.value) - 1;
  // debugger
  counterStyle();
});

increaseBtn.addEventListener("click", () => {
  // count++;
  counter.innerHTML =parseInt(counter.innerHTML) + parseInt(inputNum.value);
  inputNum.value = parseInt(inputNum.value) + 1;
  // debugger
  counterStyle();
});

function counterStyle() {
  let count = parseInt(inputNum.value);
  if (count < 0) {
    counter.classList.add("negative");
  } else if (count > 0) {
    counter.classList.add("positive");
  } else {
    counter.classList.remove("negative");
    counter.classList.remove("positive");
  }
}








// let inputNum = document.querySelector('#num');
// let decreaseBtn = document.querySelector("#button-decrease");
// let increaseBtn = document.querySelector("#button-increase");
// let numCount = document.querySelector("#num-count").innerText;
// let counter = 0;
// //= (function(){
// //   let counter = 0;
// //   return function () {
// //     return counter +=1;
// //   }
// // })();
// // function counterTotle() {
// //   let total = inputNum.value * counter;
// //   document.querySelector('counter').innerHTML;
// // }
// increaseBtn.addEventListener("click", () => {
//   counter++;
//   inputNum.value = parseInt(inputNum.value) + 1;
//   // let total = counter + inputNum;
//   // counter +=1;
//   numCount.innerHTML = inputNum.value + counter;
//   // counterStyle();
//   // counterTotle();
// });

// decreaseBtn.addEventListener("click", () => {
//   counter--;
//   inputNum.value = parseInt(inputNum.value) - 1;
//   //  counter -=1;
//   // let total = counter - inputNum;
//   numCount.innerHTML = inputNum.value + counter;
//   // counterStyle();
//   // counterTotle();
// });