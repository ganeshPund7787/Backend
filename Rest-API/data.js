import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/ganu").then(() => {
    console.log("Database connected");
})
    .catch((e) => {
        console.log(`The Error: ${e}`);
    })

const UserScheme = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

export const NewUser = mongoose.model("NewUser", UserScheme);
