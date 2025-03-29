// -- 1 -- //
let countMs = 3600000;
let countS = 3600;
let countM = 60;

const interval1 = setInterval(timer1, 1);
function timer1() {
  countMs--;
  document.querySelector(".miliseconds").textContent = `${countMs}мс`;
  if (countMs === 0) {
    clearInterval(interval1);
  }
}

const interval2 = setInterval(timer2, 1000);
function timer2() {
  countS--;
  document.querySelector(".seconds").textContent = `${countS}c`;
  if (countS == 1800) {
    alert("Залишилось менше половини часу!");
  }
  if (countS === 0) {
    clearInterval(interval2);
  }
}

const interval3 = setInterval(timer3, 60000);
function timer3() {
  countM--;
  document.querySelector(".minutes").textContent = `${countM}хв`;
  if (countM === 0) {
    clearInterval(interval3);
  }
}

// -- 2 -- //
let seconds = 30;
const btn = document.querySelector(".small-timer");

let interval4;
document.querySelector(".small-timer").addEventListener("click", (e) => {
    seconds = 30;
    clearInterval(interval4);
  btn.classList.remove("rotating");
  interval4 = setInterval(timer4, 1000);
  btn.style.backgroundColor = "white";
  btn.textContent = `30с`;
});
function timer4() {
  seconds--;
  btn.textContent = `${seconds}с`;

  if (seconds <= 10) {
    btn.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
  }
  if (seconds === 0) {
    btn.classList.add("rotating");
    clearInterval(interval4);
  }
}
