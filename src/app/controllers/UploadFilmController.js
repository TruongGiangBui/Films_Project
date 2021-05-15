const Film=require('../models/Films')
const { multipleMongooseToObject } = require('../../util/mongoose');

class UploadFilmController {
  //[GET] /
    index(req, res, next) {        
        if(req.query.err)
          res.render("user/uploadfilm", { alert: "Vui lòng điền đầy đủ thông tin" })
      else res.render("user/uploadfilm")
    }
}
module.exports = new UploadFilmController();