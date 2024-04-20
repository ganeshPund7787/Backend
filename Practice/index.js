import express from "express"
import { config } from "dotenv";
config({ path: "./config/.env" });
import UserRoutes from "./router/router.user.js"
import { MongoConnect } from "./config/data/data.mongo.js";
import { home } from "./controllers/controller.user.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

const app = express();

MongoConnect();
//middleware
app.use(express.json());

//routes
app.use("/api/user", UserRoutes);

//request
app.get("/", home);
app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
        console.log("server is on http://localhost:4000");
});




//