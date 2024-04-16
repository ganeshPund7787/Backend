import express from "express"
import path from "path"

const app = express();

// This is for access to static file
app.use(express.static(path.join(path.resolve(), "./file kname")));


app.get("", (req, res) => {
    const location = path.resolve();
    console.log(location);
    res.send(location);

    res.render("Around this page "); // Reoeat go th this page
});


app.listen(4000, () => {
    console.log("server is on http://localhost:4000");
});


