import express from "express"
import { loginUser, resisteruser } from "../controllers/controllers.user.js";

const routes = express.Router();

routes.post("/resister", resisteruser);
routes.post("/login", loginUser);

export default routes;