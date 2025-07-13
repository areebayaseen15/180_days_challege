
//  named import
import { greet, age } from './utils.js';

console.log(greet('Areeba')); // Hello, Areeba


////  default import
import greet from './utils.js';

console.log(greet('Areeba'));



// import as *
import * as utils from './utils.js';

console.log(utils.name); // Areeba
console.log(utils["age"]);

console.log(utils.greet()); // Hi!
