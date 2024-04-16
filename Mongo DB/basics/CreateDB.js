// const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Sample")
    .then(() => {
        console.log("DBMS Connected");
    })
    .catch((e) => {
        console.log(e);
     })


    const Clg = new mongoose.Schema({
    name: String,
    email: String,
    password: Number,
    });

const student = new mongoose.model("student", Clg);

// //++++++++++++++  Here we Create direct record   +++++++++++++++++
student.create({
    name: "Mayur Wani",
    email: "mayur@gmail.com",
    password: 987654321,
});





