import mongoose from "mongoose"

export const MongoConnect = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/", { dbName: "ganu" })
        .then(() => console.log("Database connected succesfuly"))
        .catch((err)=> console.log(`error While fetch ${err}`))
}


























