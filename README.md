# Node.js

Node.js is a free, open source tool that lets you run JavaScript outside the web browser.

With Node.js, you can build fast and scalable applications like web servers, APIs, tools, and more.

## What Can You Build With Node.js?

Node.js uses an **event-driven, non-blocking** model.

It can handle many connections at once without waiting for one to finish before starting another.

This makes it great for real-time apps and high-traffic websites.

Here are some examples of what you can build with Node.js:

- Web servers and websites
- REST APIs
- Real-time apps (like chat)
- Command-line tools
- Working with files and databases
- IoT and hardware control

## How to Run Node.js Code

node app.js

## Learning by Examples

```js
let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  })
  .listen(8080);
```

## Node.js Built-in Modules

Node.js comes with many **built-in modules** to help you work with files, servers, paths, the operating system, and more.

You can use them by importing them with `require()`.

```js
const os = require("os");
console.log(os.platform());
```
