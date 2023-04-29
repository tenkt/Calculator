function addMath(a, b) {
    return a + b;
};

function subtractMath(a, b) {
    return a - b;
};

function sumMath (array) {
    return array.reduce((total, current) => total + current, 0);
  };
  
function multiplyMath (array) {
return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

function powerMath (a, b) {
return Math.pow(a, b);
};

function factorialMath (n) {
if (n === 0) return 1;
let product = 1;
for (let i = n; i > 0; i--) {
    product *= i;
}
return product;
};
