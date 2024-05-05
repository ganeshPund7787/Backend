import mongoose from "mongoose";

export const mongoConnection = () => {
    mongoose.connect(process.env.MONGO_URI, { dbName: "BackendPractice" })
        .then(() => console.log("mongoDB connected"))
        .catch((e) => {
            console.log(e + "error While database cojnnection");
        })
}