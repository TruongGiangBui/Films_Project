const Film = require('../models/Films');
const User=require('../models/User')

class UserController {
    //post login 
    //post
    login_post(req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        User.findOne({ username: username})
            .then(user => {
                if (user.username === username) {
                    if (user.password === password) {
                        res.cookie("user", user.username);
                        res.cookie("role", user.role);
                        res.send("logedin");
                    }
                    else res.send({ err: "Wrong password" })
                }
                else res.send({ err: "Username does not exist" })
            }).catch(() => {
                res.send({ err: "Username does not exist" })
            })
    }
    //create new user
    //post
    create_user(req, res, next) {
        if (req.body.username != null) {
            console.log(req.body.username)
            var user = new User({ username: req.body.username, password:req.body.password })
            user.save()
            .then(user => {
                res.send(user.username)
            }).catch(err => {
                res.send("user exist")
            })
        }
    }
    //role all
    //userinfo
    //get
    userinfo(req, res, next) {
        res.cookie("user","giang")
        res.send("info")
    }
    //role admin
    //delete
    deleteuser(req, res, next) {
        User.findOneAndDelete({ "username": req.body.username })
            .then(user => {
            res.send(user)
        }).catch(next)
    }
    //user notification
    //get
    notification(req, res, next) {
       
        res.send("notifiaction "+req.cookies.user)
    }
    //views user
    //role admin
    //get
    viewallusers(req, res, next) {
        res.send("all users")
    }

    //role admin
    //delete
    deletefilm(req, res, next) {
        res.send("delete film")
    }
    //role admin
    //post
    modifyfilm(req, res, next) {
        res.send("modify film")
    }
    //upload film
    //role admin
    //post
    uploadfilm(req, res, next) {
        res.send("uploadfilm")
    }
}
module.exports = new UserController();
