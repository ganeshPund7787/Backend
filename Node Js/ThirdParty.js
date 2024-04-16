//Express.js:/Lodash: /Axios:/Mongoose:/Joi: /Passport.js//Bcrypt.js:/Nodemailer/ Moment
// Third party modules means they are already created they we are used

// In Download time if we use  ***** -g ***** they are globely
// 1) First npm pokemon

// const pokemon = require("pokemon");

// console.log(pokemon.random());
// console.log(pokemon.all());
// console.log(pokemon);



// ++++++++ Here I am creating Basic server  +++++++++++++++

// const http = require("http"); // console.log(http);
// const fs = require("fs"); //Reading a file using Fs (file System)
// const PortNum = 4401;
// const HostName = "localhost";
// const home = fs.readFileSync("./index.html", "utf-8");

// const server = http.createServer((request, response) => {
//     if(request.url === "/")
//         return response.end(home);
//     else if (request.url === "/about") {
//        return  response.end("Abot page");
//     } else {
//         return response.end("404 Page is not found");
//     }
// });

// server.listen(PortNum, HostName, () => {
//     console.log(`Server is working http://${HostName}:${PortNum}`);
// });

// console.log(__dirname);
// console.log(__filename);





const http = require("http");
const PortNum = 4003;
const HostName = "localhost";
const fs = require("fs");

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
    res.end(home);
});

server.listen(PortNum, HostName, () => { 
    console.log(`Your Server is http://${HostName}:${PortNum}`);
});





















