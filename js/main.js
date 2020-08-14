// state variables

// cached elements
input = document.querySelector("#num");
totalEl = document.querySelector("span");

// event listeners
document.querySelector("#plus").addEventListener("click", handleClickPlus);
document.querySelector("#minus").addEventListener("click", handleClickMinus);

// functions
function init() {
  runningTotal = 0;
  input.value = 1;
  render();
}

function render() {
  if (runningTotal < 0) {
    totalEl.textContent = runningTotal;
  } else {
    totalEl.textContent = runningTotal;
  }
}

function handleClickPlus() {
  let inputValue = parseInt(input.value);
  runningTotal += inputValue;
  render();
}

function handleClickMinus() {
  let inputValue = parseInt(input.value);
  runningTotal -= inputValue;
  render();
}

init();
