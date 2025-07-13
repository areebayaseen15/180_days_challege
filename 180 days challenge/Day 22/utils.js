
//  1. Named Export
// You export one or more specific things by name.

//  Example:
export function greet(name) {
  return `Hello, ${name}`;
}

export const age = 25;


//  2. Default Export
// You export one main value from a file. You don't need curly braces to import it.

export default function greet(name) {
  return `Hello, ${name}`;
}


// 3. * (Asterisk) Import – Import Everything
// Use * to import all exports from a file as an object.

//  Example:
// utils.js
export const name = 'Areeba';
export const myAge = 25;
export function greet() {
  return 'Hi!';
}


//  Dependencies in Modules
// These are external libraries or packages you use in your module, like:

// import express from 'express';
// You install them via npm:

