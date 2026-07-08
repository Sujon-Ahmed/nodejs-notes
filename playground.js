// variables (let, const, var)
// let name = 'Node.js';
const version = 22;

// function declaration
function greet(user) {
    return `Hello, ${user}`; // template literal (ES6)
}

// arrow function (ES6)
const add = (a, b) => a + b;

// console.log(greet("Developer"));
// console.log(add(5, 3));

// object
const user = {
    name: 'Alice',
    age: 25,
    greet() {
        console.log(`Hi, i'm ${this.name}`);
    }
}

// array
const colors = ['red', 'green', 'blue'];

// array methods (ES6)
colors.forEach(color => console.log(color));
const lengths = colors.map(color => color.length);

// Asynchronous programming

// 1. callbacks (traditional)
function fetchData(callback) {
    setTimeout(() => {
        callback('Data retrieved');
    }, 1000);
}

// 2. promises (ES6)
const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved");
        }, 1000);
    })
}

// 3. async/await (ES8)
async function getData() {
    const result = await fetchDataPromise();
    console.log(result);
}

getData(); // call the async function

const {name} = user; // destructuring assignment (ES6)
console.log(`Hello, ${name}`);