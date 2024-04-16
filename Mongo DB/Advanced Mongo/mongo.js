
import mongoose from "mongoose"

mongoose
.connect("mongodb://127.0.0.1:27017/", { dbName: "ganu" })
.then(() => console.log("Database connected succesfuly"))
.catch((err)=> console.log(`error While fetch ${err}`))


const UserSchema = new mongoose.Schema({
    name: String,
    desc: String,
    categaries: [],
    datecreated: {
        type: Date,
        default: Date.now()
    }
});


export const User = mongoose.model("Users", UserSchema);







