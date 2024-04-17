import { User } from "../models/models.user.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.handler.js";

export const resisteruser = async(req, res, next) => { 
    try {
        const { name, email, password } = req.body;
        const isExist = await User.findOne({ email })
    
        if (isExist) return next(errorHandler(404, "User already Exist"));
    
        const hashPass = bcryptjs.hashSync(password, 10);

        await User.create({ name, email, password: hashPass });
        
        res.status(200).json({
            message: "user resister"
        });
    } catch (error) {
        next(error);
    }
}


export const loginUser= async(req,res,next)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if (!user) return next(errorHandler(400, "user is not exist"));
    
        const isPasswordMatch = bcryptjs.compareSync(password, user.password)

        if (!isPasswordMatch) return next(errorHandler(404, "Wromg Password")); 
        res.status(202).json({
            message:`Welcome ,${user.name}`
        })
    } catch (error) {
        next(error);
    }
}
