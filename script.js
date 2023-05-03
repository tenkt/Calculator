let firstNum = '';
let secondNum = '';
let operator = '';
let currentDisplay = document.querySelector('.current');
const equal = document.querySelector('.equal');
const deletebtn = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.opera');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        equation = currentDisplay.textContent += button.dataset.value;
        console.log(equation)
        numArray = equation.split(" ")
        firstNum = Number(numArray[0])
        operator = numArray [1]
        secondNum = Number(numArray[2])
        equal.addEventListener('click', () => {
           currentDisplay.textContent = operate(firstNum, secondNum, operator)
        })
    });
});

function opHold(opera) {
    operator = opera
    currentDisplay.textContent += " " + operator + " "
}

operators.forEach((opera) => {
    opera.addEventListener('click', (e) => {
        opHold(e.target.textContent);
        console.log(currentDisplay.textContent)
    });
});

function operate(firstNum, secondNum, operator) {
    if (operator === "+") {
        return addMath(firstNum, secondNum)
    } if (operator === "-") {
        return subtractMath(firstNum, secondNum)
    } if (operator === "x") {
        return multiplyMath(firstNum, secondNum)
    } if (operator === "/") {
        return divideMath(firstNum, secondNum)
    };
};

function addMath(firstNum, secondNum) {
    return firstNum + secondNum;
};

function subtractMath(firstNum, secondNum) {
    return firstNum - secondNum;
};

function multiplyMath (firstNum, secondNum) {
return firstNum * secondNum;
};

function divideMath(firstNum, secondNum) {
    return firstNum / secondNum;
}

deletebtn.addEventListener('click', () => {
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
    if (firstNum + operator) {
        deleteop()
    };
})

deleteop = () => {
    currentDisplay.textContent.slice(-3, -1);
};
clear.addEventListener('click', () => {
    currentDisplay.textContent = '';
    firstNum = '';
    secondNum = '';
    operator = '';
});
