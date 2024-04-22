import { User } from "../models/models.user.js";

export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) return res.status(404).redirect("/login");

    req.user = await User.findById({ _id: token });
    next();
}
