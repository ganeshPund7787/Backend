import express from "express" 
import BodyParse from "body-parser"
import { MongoConnect, User } from "./Mongo.js"
const app = express();

MongoConnect();
app.use(BodyParse.urlencoded({ extended: false }))
app.use(express.json());
app.set("view engine", "ejs");
app.set("./views");

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/API/v1/register", async (req, res) => {
    const { username, email, password, password2 } = req.body; 
    await User.create({
        username, email, password 
    })
    console.log(req.body);
    console.log(req.body.email);
    res.json({
        Success: true
    })
});

app.listen(4000, () => {
    console.log("The server is rnning http://localhost:4000");
})


