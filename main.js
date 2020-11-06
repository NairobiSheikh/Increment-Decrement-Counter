let inputNum = document.querySelector('#num');
let decreaseBtn = document.querySelector("#button-decrease");
let increaseBtn = document.querySelector("#button-increase");
let counter = document.querySelector("#counter");
let count = 0;

decreaseBtn.addEventListener("click", () => {
  count--;
  counter.innerHTML = inputNum.value * count;
  counterStyle();
});

increaseBtn.addEventListener("click", () => {
  count++;
  counter.innerHTML = inputNum.value * count;
  counterStyle();
});

function counterStyle() {
  if (count < 0) {
    counter.classList.add("negative");
  } else if (count > 0) {
    counter.classList.add("positive");
  } else {
    counter.classList.remove("negative");
    counter.classList.remove("positive");
  }
}