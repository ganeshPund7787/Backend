import { User } from "../model/user.models.js";
import bcryptjs from "bcryptjs"
import { errorHadler } from "../utils/errorHadler.js";
import jwt from "jsonwebtoken"


export const register = async (req, res, next) => {
    const { name, email, password } = req.body;

    const isExist = await User.findOne({ email });
    if (isExist) return next(errorHadler(404, "Uswer alerady exist"))
    const hashPassword = bcryptjs.hashSync(password, 10);
    await User.create({
        name, email, password: hashPassword
    })
    res.json({
        message: "User created"
    });
}

export const login = async (req, res, next) => {

    try {
        const { email, password } = req.body;

        const isExist = await User.findOne({ email });
        if (!isExist) return next(errorHadler(400, "user is not exist"))

        const validPassword = bcryptjs.compareSync(password, isExist.password);
        if (!validPassword) return next(errorHadler(404, "Incorrect pasasword"))

        const token = jwt.sign({ _id: isExist._id }, process.env.SECREATE_KEY);

        res.cookie("cookie", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 60
        }).status(200).json({
            message: "login Successfuly"
        })
    } catch (error) {
        next(error)
    }
}


export const logout = async (req, res, next) => {
    try {
        res.status(200).clearCookie("cookie").json({
            message: "Logout Successfuly"
        })
    } catch (error) {
        next(error)
    }
}


export const updatUser = async (req, res, next) => {
    if (req.user._id !== req.params.id) {
        return next(errorHadler(404, "You can update only your"));
    }
    try {
        if (req.body.email) {
            const isExist = await User.findOne({ email: req.body.email });
            if (isExist) return next(errorHadler(400, "email already exist"));
        }

        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        const { id } = req.params;
        const updatUser = await User.findByIdAndUpdate(id, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        })

        const { password, ...rest } = updatUser._doc;

        res.status(200).json({
            message: "User update success",
            rest
        })
    } catch (error) {

    }
}