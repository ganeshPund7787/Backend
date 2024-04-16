import express from "express"
import mongoose from "mongoose"
import { User } from "../model/model.user.js";

export const home = (req, res) => {
    res.send("<h1>Home Page</h1>");
} 

export const resister = async(req, res) => {
    const { name, email, password } = req.body;
    if (User.find({ email })) return res.status(400).json({
        success: false,
        meassage: "User Already Resister"
    })
    
    const UserResister = await User({ name, email, password });
    await UserResister.save();
    res.status(201).json({
        meassage: "User Created"
    });
    const FindUser = User.find();
    console.log(FindUser);
}

export const removeuser = async (req, res) => {
    await User.findOneAndDelete({ name: "fdhfghfg" });
    // const data = User.find();
    res.status(308).json({
        success: true,
        // data
    });
}

export const UpdateUser = async (req, res) => {
    await User.findOneAndUpdate({ name: "ganu don" }, { $set: { name: "Ganesh Pund" } });
      res.status(308).json({
        success: true,
    });
}

export const UpdateManyUser = async (req, res) => {
    await User.updateMany({ password: "1243asdddddf" }, { $set: {  password: "update Many Password" } });
      res.status(308).json({
        success: true,
    });
}

// This is for login

export const LoginUser = async (req, res) => { 
    const { name, email, password } = req.body;
    const UserExist = await User.findOne({ email });
    
    if (!UserExist) {       
        return res.status(404).json({
            success: false,
            message: "User Not Found"
        });
    }

    if (UserExist.password != password) {
        return res.status(404).json({
            success: false,
            message: "Incorrect Username or password"
        });
    }

    res.status(202).json({
        message: "User Resister succesfuly"
    })
}


