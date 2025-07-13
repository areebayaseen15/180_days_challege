# 📢 Day 22 Task — JavaScript Modules
📅 Date: 12 July 2025

---

## 🧠 Learning Focus

- Import / Export in JavaScript
- ES Modules (ECMAScript Modules)
- Module patterns and usage

---

## 📚 Resources

- [FreeCodeCamp — JavaScript Modules Explained with Examples](http://freecodecamp.org/news/javascript-modules-explained-with-examples)

---

## 📝 Summary

JavaScript modules allow you to organize and reuse code across files using `export` and `import`.

### ✅ Types of Exports

- **Named Export:**
  ```js
  export const name = "Areeba";
  export function greet() { return "Hi"; }
  ```
- **Default Export:**
```js
export default function greet() { return "Hello"; }

  ```
- **Import All with Asterisk *:**
```js
import * as utils from './utils.js';
console.log(utils.name);
  ```

##  🛠️ Why Modules Matter
Cleaner and organized code

Reusability

Avoids global namespace pollution

Ideal for team-based or scalable development





