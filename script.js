let firstNum = '';
let secondNum = '';
let operator = '';
//let numArray = []
let currentDisplay = document.querySelector('.current');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.opera');
const buttons = document.querySelectorAll('.button');



buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        equation = currentDisplay.textContent += button.dataset.value;
        numArray = equation.split(" ")
        firstNum = numArray[0]
        operator = numArray [1]
        secondNum = numArray[2]
        equal.addEventListener('click', () => {
            operate(firstNum, secondNum, operator)
        })
    });
});



function opHold(opera) {
    operator = opera
    currentDisplay.textContent += " " + operator + " "
   
}
console.log(currentDisplay.textContent)
operators.forEach((opera) => {
    opera.addEventListener('click', (e) => {
        opHold(e.target.textContent);
        console.log(currentDisplay.textContent)
    });
});



function operate(num1, num2, operator) {
    if (operator = "+") {
        return addMath(num1, num2)
    } if (operator === "-") {
        return subtractMath(num1, num2)
    } if (operator === "x") {
        return multiplyMath(num1, num2)
    } if (operator === "/") {
        return divideMath(num1, num2 )
    };
};

function addMath(num1, num2) {
    return num1 + num2;
};

function subtractMath(num1, num2) {
    return num1 - num2;
};

function multiplyMath (num1, num2) {
return num1 * num2;
};

function divideMath(num1, num2) {
    return num1 / num2;
}

clear.addEventListener('click', () => {
    currentDisplay.textContent = '';
    firstNum = '';
    operator = '';
});
