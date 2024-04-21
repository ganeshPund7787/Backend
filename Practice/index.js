import express from "express"
import { isAuthenticate } from "./middleware/auth.js";
import { config } from "dotenv"
config({ path: "./config/.env" });
import { MongoConnect } from "./config/data/data.mongo.js";
import routes from "./router/router.user.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


MongoConnect();
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use("/user", routes)

app.get("/", isAuthenticate, (req, res) => {
    res.render("index", {
        path: "/user/loginuser",
        btn: "login"
    });
});

app.get("/registeruser", (req, res) => {
    res.render("register");
});

app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
    console.log("server is on http://localhost:4000");
});
