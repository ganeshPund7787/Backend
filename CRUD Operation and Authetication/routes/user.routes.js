import express from "express";
import { logoutUser, userLogin, userProfile, userRegister } from "../controllers/user.controllers.js";
import { isAutheticated } from "../middleware/Autheticated.js";

const routes = express.Router();

routes.post("/register", userRegister);
routes.post("/login", userLogin);

routes.get("/logout", logoutUser);
routes.get("/profile", isAutheticated, userProfile);

export default routes;
