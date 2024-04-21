import expresss from "express"
import mongoose from "mongoose"
import BodyParser from "body-parser"

const app = expresss();

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

app.use(BodyParser.urlencoded({ extended: false }));
app.use(expresss.json());
const NewUser = mongoose.model("NewUser", UserScheme);


// //+++++++++++++++  Create User  +++++++++++++++ 
app.post("/API/v1/resister/user", async (req, res) => {
    const perspn = await NewUser.create(req.body);
    res.status(200).json({
        "success": true
    });
    const UserData = await NewUser.find();
    // const delted = await NewUser.updateOne({name: "Jay Bajarangbali"});
    console.log(UserData);
});
app.listen(4000);

// API:- http://localhost:4000/API/v1/resister/user

// +++++++++++++ Read Data   +++++++++++++++++++

app.get("/API/v1/users", async (req, res) => {
    const UserData = await NewUser.find();
    console.log(UserData);

    res.status(200).json({
        "success": true
    })
})

// API:- http://localhost:4000/API/v1/users


//+++++++++++ Update User  ++++++++++++++

app.put("/API/v3/Update/:id", async (req, res) => {
    let company = await NewUser.findById(req.params.id);
    company = await NewUser.findByIdAndUpdate(req.params.id, req.body);
    // , {
    //         new: true,
    //         useFindAndModify: true,
    //         runValidators: true
    //     }
    if (req.params.id) {
        console.log("paramns is working well find use");
    } else {
        console.log("Not Working");
    }
    res.status(200).json({
        success: true,
        company
    })
})


//+++++++++++ Delete User  ++++++++++++++

app.delete("/API/v3/delete/:id", async (req, res) => {
    const user = await NewUser.findById(req.params.id);
    console.log(user);
})












