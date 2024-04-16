// // These are build in modules
// // This is return File extension
// //+++++++ Path   +++++++
const path = require("path");

const exe = path.extname('app.js'); // This return Extension
// console.log(exe);

const fileRootPath = path.basename("PS D:/backend/Node Js>"); // It's return the Directory name of working directory
// console.log(fileRootPath);

const c = '/.abc';
const b = path.join("PS D:/backend/Node Js>" + c);
// console.log(b);



// ++++++++++++++     Os    ++++++++++++++++++++++

 const os = require("os");

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.loadavg());
console.log(os.hostname());



// Here I am Creating New Nodule/server/api aftr Basic lerning
const http = require("http");
const fs = require("fs");
const hostname = "localhost";
const PostNum = 4003;
const CodeFile = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(CodeFile);
    } else { 
        res.end("Error 404 !not found");
    }
});

server.listen(PostNum, hostname, () => {
    console.log(`The http://${hostname}:${PostNum}`);
})



const obj = require("./indexFs");

console.log(obj.Sum(10,10));
