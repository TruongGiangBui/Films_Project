const express = require('express');
const router = express.Router();
const middleware=require("../middleware/AuthMiddleware")
const userController = require('../app/controllers/UserController');
router.post('/create', userController.create_user);
router.post('/loginpost',userController.login_post);
router.delete('/deleteuser',middleware.adminauth,userController.deleteuser);
router.get('/info',middleware.userauth,userController.userinfo)
router.get('/notification', middleware.userauth,userController.notification);
router.delete('/deletefilm', middleware.adminauth,userController.deletefilm);
router.post('/modifyfilm', middleware.adminauth,userController.modifyfilm);
router.post('/uploadfilm',middleware.adminauth, userController.uploadfilm);
router.get('/allusers',middleware.adminauth,userController.viewallusers)
module.exports = router;
