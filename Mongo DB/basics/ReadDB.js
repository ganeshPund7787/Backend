// ++++++++++++ Read data   ++++++++++++++++++++++


const mongo = require("mongoose");

mongo.connect("mongodb://127.0.0.1:27017/Sample")
    .then(() => {
        console.log("Database connected Succesfuly");
    })
    .catch((e) => {
        console.log(e);
    })

const Company = new mongo.Schema({
    name: String,
    adds: String,
    income: Number
})

const manager = new mongo.model("manager", Company);

(async function ReadData() {
    const data = await manager.find();
    //+++++++  Operqaters  ++++++++++++++++
    const equal = await manager.find({ name: {$eq: "Lalu"} });
    const greater = await manager.find({ income: {$gt: 90000} })
    const greateEqual = await manager.find({ income: { $gte: 5900000 } });
    const less = await manager.find({ income: { $lt: 5900000 } })
    const gavthi = await manager.findOneAndDelete({name: "Gavathi"});  // delte data from the databse
    console.log(gavthi);
})();











