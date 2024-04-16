import express from "express"
import { LoginUser, UpdateManyUser, UpdateUser, home, removeuser, resister,  } from "../controllers/controller.user.js";

const routes = express.Router();


routes.get("/", home);
routes.post("/resister", resister);
routes.delete("/removeuser", removeuser);
routes.put("/updateuser", UpdateUser);
routes.put("/updateMany", UpdateManyUser)


// User login

routes.post("/login", LoginUser);
export default routes




