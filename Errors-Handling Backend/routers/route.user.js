import express from "express"
import { loginGet, loginUser, logoutUser, registerGet, resisteruser } from "../controllers/controllers.user.js";

const routes = express.Router();

routes.get("/register", registerGet);
routes.post("/register", resisteruser);
routes.get("/login", loginGet);
routes.post("/login", loginUser);
routes.get("/logout", logoutUser);

export default routes;