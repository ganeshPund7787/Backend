import express from "express"
import { LoginUser, UpdateManyUser, UpdateUser, home, loginuser, removeuser, resister,  } from "../controllers/controller.user.js";

const routes = express.Router();


routes.get("/", home);
routes.post("/resister", resister);
routes.delete("/removeuser", removeuser);
routes.put("/updateuser", UpdateUser);
routes.put("/updateMany", UpdateManyUser)


// User login
routes.post("/login", LoginUser);

routes.post("/loginuser", loginuser);

export default routes




