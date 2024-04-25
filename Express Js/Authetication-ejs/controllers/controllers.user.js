import { name } from "ejs";
import { User } from "../models/models.user.js";
import { errorHandler } from "../utils/error.user.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const isUserExist = await User.findOne({ email });

        if (isUserExist) return next(errorHandler(404, "User already exist"));

        const hashPass = bcryptjs.hashSync(password, 5);

        await User.create({
            name, email, password: hashPass
        });

        res.status(202).render("login");
    } catch (error) {
        next(error);
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const isUserExist = await User.findOne({ email });

        if (!isUserExist) return next(errorHandler(404, "User is not exist"));

        const validPassword = bcryptjs.compareSync(password, isUserExist.password);

        if (!validPassword) return res.render("login", {
            message: "Incorect username or password"
        });

        const token = jwt.sign({ _id: isUserExist._id }, process.env.JWT_KEY);

        res.cookie("token", token, { httpOnly: true, maxAge: 48 * 60 * 60 * 60 * 1000 }).render("index", {
            path: "/logout",
            btn: "logout",
            user: isUserExist.name
        });
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    if (req.params.id !== req.user._id)
        return next(errorHandler(400, "You cannot Update person account"));

    try {
        const { id } = req.params;

        if (req.body.email) {
            const user = await User.findOne({ email: req.body.email });
            if (user) return next(errorHandler(400, "user already taken"));
        }

        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const userUpdate = await User.findByIdAndUpdate(id, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        }, { new: true });

        const { password, ...rest } = userUpdate._doc;

        res.redirect("/profile").json({
            message: "User update successfuly",
            rest
        });
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    if (req.params.id !== req.user._id)
        return next(errorHandler(400, "You cannot delete person account"));

    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.json({ message: "User delete successfuly" })
    } catch (error) {
        next(error);
    }
}