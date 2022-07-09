const num1 = 1; // number
const num2 = 1; // number
const hren2 = ''; //string
const hren3 = true; //false boolean прадва/не правда
const arrHreniv = [1, 'Alla', true]; //array масив

const sum = num1 + num2;

let count = 0;

function firstFunc(arg1, arg2) {
  count = count + 1;
  return arg1 + arg2;
}

firstFunc(2, 5);
firstFunc(2, 5);
firstFunc(2, 5);

test.innerHTML = firstFunc(2, 6);



console.log('firstFunc => ', firstFunc(2, 6));

console.log('count', count);
