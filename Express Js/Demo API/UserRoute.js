
const express = require("express");
const router = express.Router();
const UserControle = require("./UserControle");

router.route("/resister").post(UserControle);
router.route("/login").post((req, res) => { 
    res.json({
        value: "You are Getting data"
    });
});

module.exports = router;






