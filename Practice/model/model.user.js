import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        // unique: true,
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    // profileUrl: {
    //     type: String,
    //     require: true,
    //     default: "imgURL"
    // }
}, { timestamps: true });


export const User = new mongoose.model("User", UserSchema);

