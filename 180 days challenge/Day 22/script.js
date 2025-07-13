import capitalize, { getPower } from './main.js';


function warn(name) {
    return `I am warning you, ${capitalize(name)}!`;
}

console.log(warn('areeba!'));
// I am warning you, Areeba!

export { warn };


function calculate(number){
    return `The power of ${number} is ${getPower(number)}`
}


console.log(calculate(5));
