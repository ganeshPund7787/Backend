//###  Old Video  #####

// Get = Read
// Post = create
// Put = update
// Delete = delete

const express = require("express");
const app = express();
const path = require("path");
const BodyParser = require("body-parser");
const port = 4000;
app.use(BodyParser.urlencoded({extended: false}));// used for Acces form Data
app.get("/", (req, res) => {
    // res.send("<h1> Hellow Word <h1>"); // Only Read Data 
    res.sendFile(path.join(__dirname + "/ind.html"));
});

app.post("/api/g7/vs", (req, res) => { // Here is Passing Data API
    console.log("Post Request");
    // console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    res.send(`<h3>${req.body.name}</h3>`);
})

app.listen(port, () => {
    console.log(`Server is working on Port ${port}`);
});
