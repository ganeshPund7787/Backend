
import { User } from "../model/model.user.js";
import jwt from "jsonwebtoken"


export const isAuthenticate = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.redirect("/user/loginuser");
        }
        else {
            const decoded = jwt.verify(token, "i am web developer");
            req.user = await User.findById(decoded._id);
            next();
        }
    } catch (error) {
        next(error);
    }
};










