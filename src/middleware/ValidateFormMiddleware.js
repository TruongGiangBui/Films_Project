module.exports = {
    validateuploadform(req, res, next) {
        if(req.body) res.send(req.body)
else
        res.redirect("/user/uploadfilm?err=1")
    }
}