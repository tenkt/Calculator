// function factorialMath (n) {
// if (n === 0) return 1;
// let product = 1;
// for (let i = n; i > 0; i--) {
//    product *= i;
// }
// return product;
// };

//function sumMath (array) {
//    return array.reduce((total, current) => total + current, 0);
//  };

// function powerMath (a, b) {
// return Math.pow(a, b);
// };

function addMath(a, b) {
    return a + b;
};

function subtractMath(a, b) {
    return a - b;
};

function multiplyMath (a, b) {
return a * b;
};

function divideMath(a, b) {
    return a / b;
}

function operate (num1, num2, operator) {
    if (operator === addMath) {
        return addMath(num1, num2);
    }
    if (operator === subtractMath) {
        return subtractMath(num1, num2);
    }
    if (operator === multiplyMath) {
        return multiplyMath(num1, num2);
    }
    if (operator === divideMath) {
        return divideMath(num1, num2);
    }
}