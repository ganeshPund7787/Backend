import express from "express"
import {config } from "dotenv"
config({path:"./config/.env"});
import routes from "./routers/route.user.js";
import { mongoConnect } from "./config/data/data.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

mongoConnect();
const server = express();
server.use(express.json());

server.use("/api/user", routes);

server.use(errorMiddleware);
server.listen(process.env.PORT, () => {
    console.log(`The server is on http:/localhost:${process.env.PORT}`);
});

//