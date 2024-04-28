
import express from "express";

const routes = express.Router();

routes.get("/about", (req, res) => {
    res.send("Go To about");
})



export default routes;