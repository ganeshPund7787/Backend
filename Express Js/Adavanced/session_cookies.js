import express from "express"
import BodyParser from "body-parser"
import session from "express-session"
import cookie from "cookie-parser"

const app = express();
const router = express.Router();

app.use(BodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "abcdefghijklmnopqrstuvwxyz"
}))
app.use(cookie());



app.get("/", (req, res) => {
    req.session.SessionName = true;
    console.log(session());
    res.status(200).json({
        success: true,
        session 
    });
})


app.get("/check", (req, res) => {
    if (req.session.SessionName != true) {
        console.log(session());
        res.status(200).json({
            success: true,
            session
        });
    } else { 
        res.status(400).json({
            success: false,
            session
        });
    }
})



app.get("/delete", async(req, res) => {
    if (req.session.SessionName == true) {
        const sess = await req.sessionID();
        console.log(sess);
        res.status(200).json({
            success: true,
            session
        });
    } else { 
        res.status(400).json({
            success: false,
            session
        });
    }
})







app.get("/", (req, res) => {
    req.session.SessionName = true;
    res.send("hey");
});

app.get("/:username", (req, res) => {
    res.json(`Hellow ${req.params.username} welcome to our website`);
});


app.get("/", (req, res) => {
    res.cookie("CookieName", 35);
    res.send("Home page")
});

app.get("/readcookie", (req, res) => {
    console.log(req.cookies.CookieName);
    res.send("Read Cookie");
});

app.get("/deletecookie", (req, res) => {
    console.log(res.clearCookie.CookieName);
    res.send("Delete cookie");
});




app.get("/checkban", (req, res) => {
    console.log("Check Kiya consle dekho");
    if(req.session.SessionName == true) res.send("You are baned"); 
    else res.send(req.session);
});

app.get("/removeban", (req, res) => {
    req.session.destroy((err) => {
        if (err) throw err;
        else res.send("You Are Remove Ban");
    })
})
app.listen(4000);







