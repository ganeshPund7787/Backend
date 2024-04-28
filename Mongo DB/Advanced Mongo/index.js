import mongoose from "mongoose";
import express from "express";
import { mongoConnection } from "./mongo.js";
mongoConnection();

const app = express();
app.use(express.json());


const UserSchema = new mongoose.Schema({
    name: String,
    nikename: String,
    desc: String,
    categaries: [],
    // categateries: {
    //     type: Array,
    //     default: []
    // },
    datecreated: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true });


const User = mongoose.model("Users", UserSchema);



// app.get("/API/user", UserRoutes);

app.get("/", (req, res) => {
    res.send("Home Page");
})

// How to Perform case-insensitive  search in MongoDB ????????????????????????

app.get("/find", async (req, res) => {
    const rejex = new RegExp("^Prajit$", "i");
    const user = await User.find({ name: rejex });
    res.json(user);
});


// find same data in user

app.get("/allpassword", async (req, res) => {
    const user = await User.find({ password: { $all: ["update Many Password"] } });
    res.send(user);
});


/// Find Datewise 
app.get("/finddate", async (req, res) => {
    const StartDate = new Date('2024-04-26');
    const EndDate = new Date('2024-04-26');
    const user = await User.find({ datecreated: { $gte: StartDate, $lte: EndDate } });
    res.json(user);
})



// Find in this document any filed exixst or not
app.get("/exists", async (req, res) => {
    const user = await User.find({ password: { $exists: true } });
    res.json(user);
})



// Find user in specific length
app.get("/findlen", async (req, res) => {
    const user = await User.find({
        $expr: {
            $and: [
                { $gte: [{ $strLenCP: `$name` }, 3] },
                { $lte: [{ $strLenCP: `$name` }, 5] }
            ]
        }
    });
    res.json(user);
})


app.listen(4000, () => {
    console.log("server is on http://localhost:4000");
})







