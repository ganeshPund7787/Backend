import express from "express";
import flash from "connect-flash";

const routes = express.Router();
const app = express();

app.use("/", routes);

app.get("/", (req, res) => {
    res.send("<h1> Home Page </h1>");
});

app.get("/create", (req, res) => {
    req.flash("name", "ganesh");
    res.send("<h1>  Data create in Session <i> (server) </i></h1>");
})

app.get("/check", (req, res) => {
    console.log(req.flash("name"));
    res.send("<h1>  Data create in Session <i> (server) </i></h1>");
})

app.listen(4000, () => {
    console.log("server on in http://localhost:4000");
});