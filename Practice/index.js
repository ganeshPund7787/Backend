import express from "express"
// import env fron "env"
import UserRoutes from "./router/router.user.js"
import { MongoConnect } from "./config/data/data.mongo.js";
import { home } from "./controllers/controller.user.js";
MongoConnect();

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/user", UserRoutes);

//request
app.get("/", home);

app.listen(4000, () => {
        console.log("server is on http://localhost:4000");
})
//     /api/user/login
    