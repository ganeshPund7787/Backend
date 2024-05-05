import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unquie: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const User = new mongoose.model("User", usersSchema);