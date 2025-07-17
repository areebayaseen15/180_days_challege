# 🟩 Day 26 — JavaScript Debugging & Bug Fixing 🐞🔍  
📅 Date: 16th July 2025

## 📌 Today's Focus  
Learn how to properly debug JavaScript code like a pro!  
Debugging is one of the most essential skills for every developer. It helps you find and fix bugs in your code more efficiently and understand how your JavaScript logic is working behind the scenes.

---

## 🛠️ Topics Covered

### ✅ 1. Using Browser Dev Tools (Chrome / Firefox)
Modern browsers like Google Chrome and Firefox come with built-in Developer Tools (DevTools) that help developers inspect, test, and debug their code.

**Key DevTools Features for JavaScript:**
- **Console Tab** – View logs, warnings, and errors
- **Sources Tab** – View your JavaScript files and add breakpoints
- **Network Tab** – Inspect API calls (optional for advanced debugging)

📌 *Shortcut to open DevTools:*  
`F12` or `Right Click → Inspect`

---

### ✅ 2. Setting Breakpoints
A **breakpoint** is a spot in your code where you tell the browser to pause execution. This lets you inspect variable values and code flow step-by-step.

**How to Set a Breakpoint:**
- Go to the **Sources** tab in DevTools
- Click on the line number where you want to pause execution
- A blue dot will appear, indicating the breakpoint

📌 Breakpoints help you:
- Trace bugs
- Understand logic
- Step through functions line-by-line

---

### ✅ 3. Console Logging Best Practices
Using `console.log()` is one of the easiest ways to debug JavaScript. But effective logging is key to quickly identifying bugs.

**Best Practices:**
- Add **labels** to logs:
  ```js
  console.log("User Data:", user);
```
Use console.error() for errors and console.warn() for warnings

Use console.table() for arrays/objects:

```
console.table(users);
```
Style your logs for visibility:

```
console.log('%c Debug:', 'color: green; font-weight: bold;', debugData);
```
✅ Final Tip:
Debugging is not about guessing — it’s about observing your code closely using the right tools!

🔗 Extra Resources
Chrome DevTools Documentation

JavaScript Error Reference - MDN
