const express = require('express');
const multer=require('multer')
const router = express.Router();
const middleware=require("../middleware/AuthMiddleware")
const userController = require('../app/controllers/UserController');
const validateform = require("../middleware/ValidateFormMiddleware");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './src/public/appdata/filmposters/');
    },
  
    filename: function (req, file, cb) {
        var slug = String(req.body.movie_name_eng).trim().split(" ").join("_")
        if (slug == "") slug = "deleted";
        cb(null, slug+".jpg");
    }
});
  
var upload = multer({ storage: storage })

router.post('/create', userController.create_user);
router.post('/loginpost', userController.login_post);
router.get('/logout',middleware.userauth,userController.logout);
router.delete('/deleteuser',middleware.adminauth,userController.deleteuser);
router.get('/info',middleware.userauth,userController.userinfo)
router.get('/notification', middleware.userauth, userController.notification);
router.post('/addhistory', middleware.userauth, userController.addhistory);
router.get('/history',middleware.userauth,userController.gethistory)
router.delete('/deletefilm', middleware.adminauth,userController.deletefilm);
router.post('/modifyfilm', middleware.adminauth,userController.modifyfilm);
router.post('/uploadfilm', middleware.adminauth,upload.single('poster'),validateform.validateuploadform,userController.uploadfilm);
router.get('/allusers',middleware.adminauth,userController.viewallusers)
module.exports = router;
