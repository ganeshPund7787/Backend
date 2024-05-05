import express from "express";
import { login, logout, register, updatUser } from "../controllers/user.controllers.js";
import { isAutheticated } from "../middleware/Auth.js";

const route = express.Router();

route.get("/", (req, res) => {
    res.send("route");
})

route.post("/register", register)
route.post("/login", login)
route.put("/update/:id", isAutheticated, updatUser);

route.get("/logout", logout)

export default route;