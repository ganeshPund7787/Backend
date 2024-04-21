import express from "express"
import { login, loginHomePage, loginUser, logout, register } from "../controllers/controller.user.js";
import { isAuthenticate } from "../middleware/auth.js";
const routes = express.Router();

routes.post("/register", register);
routes.post("/login", login);

routes.get("/loginuser", loginUser)
routes.get("/loginHomePage", isAuthenticate, loginHomePage);
routes.get("/logout", logout);

export default routes;
