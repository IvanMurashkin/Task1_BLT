let resultPopup = document.querySelector('.result-popup');
let btnCalc = document.querySelector('.btn-calc');
let btnClose = document.querySelector('.btn-close');

btnCalc.addEventListener('click', btnCalcHandler);
btnClose.addEventListener('click', btnCloseHandler);

//Обработчик кнопки "Ок" в попапе с результатом
function btnCloseHandler(e) {
    resultPopup.style.display = 'none';
}

//Обработчик кнопки "Сложить"
function btnCalcHandler(e) {
    e.preventDefault();
    let firstNum = document.querySelector('#first-number');
    let secondNum = document.querySelector('#second-number');
    let result = +sum(Number(firstNum.value), Number(secondNum.value)).toFixed(10);
    outputReslutInPopup(result)
}

function sum(firstNum, secondNum) {
    return firstNum + secondNum;
}

//Вывод результата сложения в попапе
function outputReslutInPopup(result) {
    document.querySelector('.result').innerHTML = result;
    resultPopup.style.display = 'inline-block';
}