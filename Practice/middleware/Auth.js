import { User } from "../model/user.models.js";
import { errorHadler } from "../utils/errorHadler.js";
import jwt from "jsonwebtoken"

export const isAutheticated = async (req, res, next) => {
    try {
        const { cookie } = req.cookies;
        if (!cookie) return next(errorHadler(404, "You should login first"));

        const data = jwt.verify(cookie, process.env.SECREATE_KEY);
        req.user = await User.findById({ _id: data._id });
        next();
    } catch (error) {
        next(error);
    }
}