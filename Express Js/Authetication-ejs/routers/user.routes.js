import express from "express";
import { deleteUser, loginUser, registerUser, updateUser } from "../controllers/controllers.user.js";
import { isAuthenticated } from "../middleware/Authentication.js";

const routes = express.Router();

routes.post("/register", registerUser);
routes.post("/login", loginUser);

routes.put("/update/:id", updateUser);
routes.delete("/delete/:id", isAuthenticated, deleteUser);
export default routes;