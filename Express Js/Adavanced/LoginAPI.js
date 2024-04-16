import express from "express"
import mongoose from "mongoose"
const app = express();

console.log(mongoose);

// app.use(urlencoded({ extended: false }));
app.use(express.json());

const User = [];

app.get("/success", (req, res) => {
    res.send("<h1> Data send Succesfuly <h1>")
});

app.post("/resister", (req, res) => {
    User.push(req.body);
    res.redirect("/success");
});

app.get("/users", (req, res) => {
    
    res.send(User);
})
app.listen(4000);




