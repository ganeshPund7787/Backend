import mongoose from "mongoose"

export const mongoConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, { dbName: "ganu" })
        .then(() => console.log("Database connected"))
        .catch((err) => console.log(`error nwhile database connected ${err}`))
}