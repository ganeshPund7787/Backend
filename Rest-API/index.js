import expresss from "express"
import BodyParser from "body-parser"
import routes from "./routes.js";
import { NewUser } from "./data.js";

const app = expresss();

app.use("/user", routes);
app.use(expresss.json());


app.use(BodyParser.urlencoded({ extended: false }));
app.use(expresss.json());



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











app.listen(4000, () => {
    console.log("Server is working on http://localhost:4000");
});
