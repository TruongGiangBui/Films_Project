const User=require('../app/models/User')
module.exports = {
    userauth(req, res, next)
    {
        if (req.cookies.user) {
            User.findOne({ username: req.cookies.user})
            .then(user => {
                if (user.username === req.cookies.user&&(user.role==="user"||user.role==="admin")) {
                    next();
                }
                else res.send({ err: "Access denies" })
            }).catch(() => {
                res.send({ err: "Access denies" })
            })
        }else res.send({ err: "Access denies" })
    },
    adminauth(req, res, next) { 
        if (req.cookies.user) {
            User.findOne({ username: req.cookies.user})
            .then(user => {
                if (user.username === req.cookies.user&&user.role==="admin") {
                    next();
                }
                else res.send({ err: "Access denies" })
            }).catch(() => {
                res.send({ err: "Access denies" })
            })
        }else res.send({ err: "Access denies" })
    }
    
}