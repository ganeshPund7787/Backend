import express from "express";
import { loginUser, registerUser } from "../controllers/controllers.user.js";

const routes = express.Router();

routes.post("/register", registerUser);
routes.post("/login", loginUser);


export default routes;