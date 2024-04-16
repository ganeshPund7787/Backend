const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(function (req, res, next) {
    next();   
});

app.get("/", (req, res) => { 
    res.render("index", {age: 19});
});

app.get("/about", (req, res) => { 
    res.render("about");
});
app.listen(4005);








