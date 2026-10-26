Before starting with Node.js, you should be familiar with these JavaScript concepts:

- Variables
- Functions
- Objects
- Arrays
- Asynchronous programming (callbacks, promises, async/await)
- ES6+ features

This page will give short examples of essential JavaScript concepts needed for Node.js development.

```js
// Variables (let, const, var)
let name = "Node.js";
const version = 20;

// Function declaration
function greet(user) {
  return `Hello, ${user}!`; // Template literal (ES6)
}

// Arrow function (ES6+)
const add = (a, b) => a + b;

console.log(greet("Developer")); // Hello, Developer!
console.log(add(5, 3)); // 8
```

```js
// Object
const user = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

// Array
const colors = ["red", "green", "blue"];

// Array methods (ES6+)
colors.forEach((color) => console.log(color));
const lengths = colors.map((color) => color.length);
```

```js
// 1. Callbacks (traditional)
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 1000);
}

// 2. Promises (ES6+)
const fetchDataPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Promise resolved!"), 1000);
  });
};

// 3. Async/Await (ES8+)
async function getData() {
  const result = await fetchDataPromise();
  console.log(result);
}

getData(); // Call the async function
```

```js
// Destructuring & Template Literals (ES6+)
const { name } = user;
console.log(`Hello, ${name}!`);
```

### Key JavaScript Concepts

- Variables: `let` (mutable), `const` (immutable), `var` (legacy)
- Functions: Regular, arrow functions, and methods
- Objects & Arrays: Data structures for organizing data
- Modules: `require()` (CommonJS) and `import/export` (ES6)
- Error Handling: `try/catch` blocks
