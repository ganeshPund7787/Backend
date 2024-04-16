// (Representational State transfer) is a api that defines a set of function that programmers Can
//use to send request s and receive responces  using the htttp Protocol Method Such as et or Post
// API:- Aplication Programming Interface

const express = require("express");
const bodyParser = require("body-parser"); 
const app = express();
const PortNum = 4000;
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false })); // This is for translate data Body to Json
app.use(express.json());// this is middleware

// this is for pass Data & user can get data using this API
app.get("/", (req, res) => { 
    res.json({
        name: "ganesh",
        email: "ganeshpund@gmail.com",
        adds: "Kurudgaon"
    });
    // res.sendfile(path.join(__dirname + "/index.html"));// This is for testing Api Rresister user
});

// This is for Get Data from user and Post To the API
app.post("/API/v1/resister");

app.post("/API/v1/resister", (req, res) => { 

    const Uname = req.body.name;
    const Uemail = req.body.email;
    const Upass = req.body.password;
    
    res.json({
        success: true, // But the resister time we only pass the success message
    });
});  

app.listen(PortNum, () => {
    console.log(`The Port Number is: ${PortNum}`);
});
























