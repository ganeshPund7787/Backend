import { User } from "../models/models.user.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.handler.js";

export const registerGet = (req, res) => {
    res.render('resister')
}

export const loginGet = (req, res) => {
    res.render('login')
}

export const resisteruser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const isExist = await User.findOne({ email })

        if (isExist) return next(errorHandler(404, "User already Exist"));

        const hashPass = bcryptjs.hashSync(password, 10);

        await User.create({ name, email, password: hashPass });

        res.redirect('/api/user/login')
    } catch (error) {
        next(error);
    }
}


export const loginUser = async (req, res, next) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) return next(errorHandler(400, "user is not exist"));
        const isPasswordMatch = bcryptjs.compareSync(password, user.password);

        if (!isPasswordMatch) return next(errorHandler(404, "Wromg Password"));
        // cookie
        const token = { _id: user._id }

        res.cookie('token', token, { httpOnly: true, maxAge: 15 * 60 * 1000 })
            .redirect('/')

    } catch (error) {
        next(error);
    }
}

export const logoutUser = async (req, res, next) => {
    try {
        res.clearCookie().render('index', {
            path: "/api/user/login",
            btn: 'Login'
        })
    } catch (error) {
        next(error)
    }
}


