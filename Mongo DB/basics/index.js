const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/Sample")
    .then(() => {
        console.log("MongoDB Conected Siccessfully");
    })
    .catch((error) => {
        console.log(error);
    });

const clg = new mongoose.Schema({
    name: String,
    email: String,
    login: Boolean
});    

// const Student = new mongoose.model("student", clg);
 
module.exports = mongoose.model("student", clg);; 

(async function insertdata() {
    const stu1 = new Student({
        name: "Ganesh Pund",
        email: "ganeshpund@gmail.com",
        login: true
    });
 
    await stu1.save();
})();






