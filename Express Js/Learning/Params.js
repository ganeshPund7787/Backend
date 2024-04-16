// // How to access Rout Parameter
// const express = require("express");
// const WebApp = express();
 
// app.use(express.static("/public")); // Find aall Static files in Public
// WebApp.use(function (req, res, next) {
//     next();
// });
 
// WebApp.get("/profile", (req, res) => {
//     res.send("<h1> Profile Page</h1>");
// });

// WebApp.get("/profile/:username", (req, res) => {
//     res.send(`<h2>Hello welcome ${req.params.username} </h2>`);
// });

// WebApp.listen(4000);
 

const express = require("express");
const BodyParse = require("body-parser");
const path = require("path");
const WebApp = express();

WebApp.use(BodyParse.urlencoded({extended: false}));
WebApp.use(function (req, res, next) {
    next();
});
WebApp.use(express.json()); //these three are middleware
WebApp.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

WebApp.post("/API/v1/resister", (req, res) => { 
    const uname = req.body.name;
    const uemail = req.body.email;
    const upassword = req.body.password;

    res.json({
        success: true,
        name: uname,
        email: uemail,
        password: upassword,
    });
})


WebApp.listen(4000);






