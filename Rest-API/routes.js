import express from "express";
import { NewUser } from "./data.js";

const routes = express.Router();

routes.get('/about', async (req, res, next) => {
    try {
        console.log(req.query);
        console.log(req.query.keyword);
        res.render('about')
    } catch (error) {
        next(error)
    }
})

routes.get("/all", async (req, res) => {
    const users = await NewUser.find();
    res.json({
        suceess: true,
        users,
    })
})

//static routing
routes.get("/userid", async (req, res) => {
    const { id } = req.query;
    const users = await NewUser.findById(id);
    res.json({
        suceess: true,
        users,
    })
})


// Dynamic routing
// always keep dnaic  route on laste of the programe 
routes.get("/user/:id", async (req, res) => {
    const { id } = req.params;

    const users = await NewUser.findById(id);

    res.json({
        suceess: true,
        users
    })
})


//######### Route Splitting  #############

//*** All file structrure and mvc (mongoDB version controler) */

export default routes;