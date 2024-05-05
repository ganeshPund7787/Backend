import express from "express";
import route from "./routes/routes.user.js";
import { mongoConnection } from "./data/data.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import { isAutheticated } from "./middleware/Auth.js";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
config({ path: "./config/.env" });

const app = express();
mongoConnection()
app.use(express.json());

app.use("/user", route);
app.use(cookieParser())

app.get("/", isAutheticated, (req, res) => {
    res.json(req.user)
})

app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
    console.log("server is on ");
})

