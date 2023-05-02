let num1 = '';
let num2 = '';
let currentValue = '';
const container = document.querySelector('.display');
const clearAll = document.querySelector('.clear');
const signs = document.querySelectorAll('.symbol');
const buttons = document.querySelectorAll('.button');
    
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        container.textContent += button.dataset.value; 
    });
});
signs.forEach((symbol) => {
    symbol.addEventListener('click', (e) => {
        operator = symbol.dataset.value;
        currentValue = num1 + operator
        console.log(currentValue)
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

clear = () => {
    return container.textContent = '';
};
clearAll.addEventListener('click', () => {
    clear();
})
