//  Regular Expressions (RegExp) in JavaScript
// Regular expressions are sequences of characters used to define search patterns. They're commonly used for string matching, searching, and validation (like checking email formats, passwords, etc.).

// 📘 Basic Syntax
// 🔹 Literals
// Ordinary characters that match themselves:


// "a", "1", "%"
// 🔹 Metacharacters
// Special characters with meaning:

// ^ — Start of string

// $ — End of string

// 🔹 Character Classes
// Match one character from a set:

// [a-z] // any lowercase letter
// [A-Z] // any uppercase letter
// [0-9] // any digit
// 🔹 Shorthand Character Classes
// \d — matches any digit (0–9)

// \D — matches any non-digit

// \s — matches any whitespace

// \S — matches any non-whitespace

// \w — matches word character (letters, digits, _)

// \W — matches non-word character

// 🔹 Quantifiers
// Specify how many times a character or group can appear:

// * — 0 or more times

// + — 1 or more times

// ? — 0 or 1 time

// {n} — exactly n times

// {n,m} — between n and m times

// 🔹 Escape Characters
// Use \ to treat metacharacters as normal characters:

// \$
// \.
// \[
// 📌 Example 1: Email Validation

const validEmail = (email) => {
  return /^[A-Za-z0-9]+(?:[._%+][A-Za-z0-9]+)*@[A-Za-z\d]+\.[A-Za-z]{2,}$/.test(email);
};

console.log(validEmail("areebayaseen15@gmail.com")); //  true
console.log(validEmail("test.email@domain"));        //  false (missing domain extension)
//  Example 2: Phone Number Validation (Format: 123-456-7890)
const validPhone = (phone) => {
  return /^\d{3}-\d{3}-\d{4}$/.test(phone);
};

// console.log(validPhone("123-456-7890")); //  true
// console.log(validPhone("1234567890"));   //  false
//  Example 3: Password Validation
// (Min 8 characters, at least one letter and one number)


const validPassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};

console.log(validPassword("abc12345")); //  true
console.log(validPassword("abcdefg"));  //  false