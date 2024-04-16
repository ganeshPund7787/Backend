
const UserControle = (req, res) => {
    const uname = req.body.name;
    const uemail = req.body.email;
    const upass = req.body.password;
    res.json({
        Success: true,
        name: uname,
        email: uemail,
        password: upass,
    });
}

module.exports = UserControle;




