//  SELECTOR --------------
const container = document.querySelector(`.number--operator`);
const inputResult = document.querySelector(`.result__input`);

const allClearBtn = document.querySelector(`.operator__allClear`);
const clearBtn = document.querySelector(`.operator__clear`);
const pulsMinusBtn = document.querySelector(`.operator__plus-minus`);
const divisionBtn = document.querySelector(`.operator__division`);

const addBtn = document.querySelector(`.operator__add`);
const resultBtn = document.querySelector(`.operator__equal`);

//  ADD EVENT Listener ------------
inputResult.value = "";
let currentValue;
container.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.num`);
  if (!clicked) return;
  const clickedNum = clicked.dataset.num;
  currentValue = inputResult.value;
  inputResult.value = `${currentValue}` + `${clickedNum}`;
});
// all clear button event listener----------
allClearBtn.addEventListener(`click`, function (e) {
  inputResult.value = "";
});
// clear button event listener---------
clearBtn.addEventListener(`click`, function (e) {
  const inputArr = [...inputResult.value];
  const result = inputArr.pop();
  inputResult.value = inputArr.join("");
});
// result Button event listener ------------
resultBtn.addEventListener(`click`, function (e) {
  const result = inputResult.value;
  const inputArr = [...result];
  if (inputArr[0] === `√`) {
    inputArr.map(function (el, _, arr) {
      if (arr[0] === `√`) {
        const arr1 = arr.slice(1).join("");
        const sqrt = Math.sqrt(eval(arr1));
        inputResult.value = sqrt;
      }
    });
  } else {
    inputResult.value = eval(result);
  }
});
