import express from "express";
import { config } from "dotenv";
config({ path: "./config/.env" });
import bodyParser from "body-parser"
import routes from "./routers/user.routes.js";
import { mongoConnection } from "./config/data/data.js";
import { errorMiddlewre } from "./middleware/middlewre.user.js";
import cookieParser from "cookie-parser";
import { isAuthenticated } from "./middleware/Authentication.js";

const app = express();
mongoConnection();
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", routes);

app.set("view engine", "ejs");


app.get("/", isAuthenticated, (req, res) => {
    res.render("index", {
        path: "/login",
        btn: "login",
        name: req.body.name
    });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/logout", (req, res) => {
    res.clearCookie("token").render("login");
});

app.use(errorMiddlewre);
app.listen(process.env.PORT, () => {
    console.log(`server is on http://localhost:${process.env.PORT}`);
});