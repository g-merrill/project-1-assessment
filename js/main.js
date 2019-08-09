// constants
// state variables
let inputValue, resultValue;

// cached elements
let resultEl = document.getElementById('result');
let inputEl = document.getElementById('input');
let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');

// event listeners
plusBtn.addEventListener('click', plusClick);
minusBtn.addEventListener('click', minusClick);

function plusClick() {
    inputValue = parseInt(inputEl.value);
    if (inputValue || inputValue === 0) {
        resultValue += inputValue;
        resultEl.textContent = resultValue;
        resultValue < 0 ? resultEl.classList.add('negative') : resultEl.classList.remove('negative');
    } else {
        resultEl.textContent = 'NaN';
        resultValue = 0;
    }
}
function minusClick() {
    inputValue = parseInt(inputEl.value);
    if (inputValue || inputValue === 0) {
        resultValue -= inputValue;
        resultEl.textContent = resultValue;
        resultValue < 0 ? resultEl.classList.add('negative') : resultEl.classList.remove('negative');
    } else {
        resultEl.textContent = 'NaN';
        resultValue = 0;
    }
}

// functions
init();
function init() {
    inputValue = 1;
    inputEl.value = inputValue;
    resultValue = 0;
    resultEl.textContent = resultValue;
}





