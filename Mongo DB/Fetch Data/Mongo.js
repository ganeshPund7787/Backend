import mongoose from "mongoose"

export const MongoConnect = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/ganu")
        .then(() => console.log("Database Connected"))
        .catch((e) =>  console.log(`Handle time Eror: ${e}`))
}

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    password2: {
        type: String,
        require: true
    }
});

export const User = new mongoose.model("User", UserSchema);