 
const express = require("express");
const BodyParse = require("body-parser");
const router = require("./UserRoute");
const web = express();

web.use(BodyParse.urlencoded({extended: false}));
web.use(express.json());
web.use("/API/v1",router);

web.get("/", (req, res) => {
    res.sendFile( "/backend/Express Js/index.html");
 });

web.listen(4002, () => {
    console.log("Your port number is 4002"); 
});







