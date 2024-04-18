import mongoose from "mongoose"

export const MongoConnect = () => {
    mongoose
        .connect(process.env.MONGO_URI, { dbName: "ganu" })
        .then(() => console.log("Database connected succesfuly"))
        .catch((err)=> console.log(`error While fetch ${err}`))
}


























