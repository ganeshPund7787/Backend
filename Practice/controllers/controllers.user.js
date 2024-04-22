import { User } from "../models/models.user.js";
import { errorHandler } from "../utils/error.user.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) return next(errorHandler(404, "User already exist"));

    const hashPass = bcryptjs.hashSync(password, 5);

    await User.create({
        name, email, password: hashPass
    });

    res.status(202).render("login");
}

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    const isUserExist = await User.findOne({ email });

    if (!isUserExist) return next(errorHandler(404, "User is not exist"));

    const validPassword = bcryptjs.compareSync(password, isUserExist.password);

    if (!validPassword) return next(errorHandler(404, "Incorrect usernamr or password"));

    const token = jwt.sign({ _id: isUserExist._id }, process.env.JWT_KEY)
    res.cookie("token", token).render("index", {
        path: "/logout",
        btn: "logout",
        user: isUserExist.name
    });
} 