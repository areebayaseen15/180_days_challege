# 📅 Day 24 – JavaScript RegEx

## 📌 Topic:
**Patterns, Matching, Validation (email, numbers, etc.)**

---

## 🎯 Goal:
Learn how to use Regular Expressions (RegEx) in JavaScript for input validation and apply them to your quiz app.

---

## ✅ Today’s Learning Tasks:

### 1. Understand RegEx Basics

#### 📖 Articles (1h):
- [JavaScript Regular Expressions – FreeCodeCamp](https://www.freecodecamp.org/news/regular-expressions-for-beginners/)
- [Regex in JavaScript – FreeCodeCamp](https://www.freecodecamp.org/news/regex-in-javascript/)

#### ▶️ Video (1h):
- [Regular Expressions Crash Course – The Net Ninja](https://www.youtube.com/watch?v=rhzKDrUiJVk)

---

### 2. ✅ Coding Task
Enhance your **Quiz App** by using RegEx for input validation:
- Prevent empty answers
- *(Optional)* Validate user input like **email** or **name format**

#### 💡 Examples:
```js
// Prevent empty input
if (!answer.trim()) {
  alert("Please provide an answer!");
}
```
// Validate email
```
const validEmail = (email) => /^[A-Za-z0-9._%+-]+@[A-Za-z\d]+\.[A-Za-z]{2,}$/.test(email);
```
// Validate username (letters only, min 3 chars)
```
const validName = (name) => /^[A-Za-z]{3,}$/.test(name);
```

#### 3. 🐞 Debug + Push
Test with different edge cases (invalid emails, empty inputs, etc.)

Fix bugs and ensure validation works smoothly

✅ Push changes to GitHub

#### 4. 💼 LinkedIn Post
Share your progress with the community!
Ideas to include:

What you learned about RegEx

A screenshot or demo of your quiz app with validation

Mention #100DaysOfCode or #JavaScriptLearning

####🚀 Outcome:
By completing today’s tasks, you’ll be able to:

Use RegEx for pattern matching and validation

Apply practical validations to forms and inputs in real-world apps

Make your quiz app more robust and user-friendly

