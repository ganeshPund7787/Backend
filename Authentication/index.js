import express from "express"
import ejs from "ejs"
import { config } from "dotenv"
config({ path: "./config/.env" });
import routes from "./routers/route.user.js";
import { mongoConnect } from "./config/data/data.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import bodyParser from "body-parser";

mongoConnect();
const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.set("view engine", "ejs");
server.set("views", "./views");

server.use("/api/user", routes);
// server
server.get('/', async (req, res, next) => {
    try {
        res.render('index', {
            path: "/api/user/login",
            btn: "Login"
        })
    } catch (error) {
        next(error)
    }
})

server.get('/about', async (req, res, next) => {
    try {
        res.render('about')
    } catch (error) {
        next(error)
    }
})


server.use(errorMiddleware);
server.listen(process.env.PORT, () => {
    console.log(`The server is on http:/localhost:${process.env.PORT}`);
});

