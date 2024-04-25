import { User } from "../models/models.user.js";
import jwt from "jsonwebtoken"

export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) return res.status(404).redirect("/login");

    const data = jwt.verify(token, process.env.JWT_KEY);
    req.user = await User.findById({ _id: data._id });

    next();
}
