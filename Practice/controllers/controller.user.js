import { User } from "../model/model.user.js";
import { errorHandler } from "../utils/error.Handler.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const isUserExist = await User.findOne({ email });

        if (isUserExist) return next(errorHandler(400, "User already exist"));

        const hashPass = bcryptjs.hashSync(password);
        await User.create({ name, email, password: hashPass });

        res.redirect("/user/loginuser");
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const isUserExist = await User.findOne({ email });

        if (!isUserExist) return next(errorHandler(404, "User not exist"));

        const valid = bcryptjs.compareSync(password, isUserExist.password);

        if (!valid) return next(errorHandler(400, "Incorrect username or password"));

        const token = jwt.sign({ _id: isUserExist._d }, process.env.JWT_COOKIE_SECREATE)

        res.cookie("token", token).redirect("/user/loginHomePage");
    } catch (error) {
        next(error)
    }
}


export const logout = (req, res, next) => {
    try {
        res.clearCookie("token").render("index", {
            path: "/user/loginuser",
            btn: "login"
        });
    } catch (error) {
        next(error)
    }
}

export const loginUser = (req, res) => {
    res.render("login");
}

export const loginHomePage = (req, res) => {
    res.render("index", {
        path: "/user/logout",
        btn: "logout"
    });
}

