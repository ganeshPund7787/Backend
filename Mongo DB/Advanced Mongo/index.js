
import express from "express";
// import UserRoutes from "./userroutes.js";
import { User } from "./mongo.js";


const app = express();
app.use(express.json());

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

/// Find Datewise 
app.get("/finddate", async(req, res) => {
    const StartDate = new Date('2024-04-13');    
    const EndDate = new Date('2024-04-15');    
    const user = await User.find({ datecreated: {$gte: StartDate, $lte: EndDate} });
    res.json(user);
})


// Find in this document any filed exixst or not
app.get("/exists", async(req, res) => {
    const user = await User.find({ password: {$exists: true} });
    res.json(user);
})

// Find user in specific length
app.get("/findlen", async(req, res) => {
    const user = await User.find({ 
        $expr: {
            $and: [
                { $gte: [{ $strLenCP: `$name`}, 3]},
                {$lte: [{ $strLenCP: `$name`}, 5]}
            ]
        }
     });
    res.json(user);
})


app.listen(4000, () => {
    console.log("server is on http://localhost:4000");
})







