const express = require('express');
const router = express.Router();

const apiController = require('../app/controllers/ApiController');
router.get('/allfilms', apiController.allfilms);
router.get('/mostviewsfilm', apiController.mostviewsfilms)
module.exports = router;
