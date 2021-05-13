const Film = require('../models/Films');
const { mongooseToObject } = require('../../util/mongoose');

class FilmController {
  //[GET] /films/:slug
  detail(req, res, next) {
    Film.findOne({ slug: req.params.slug })
      .then((film) => {
        res.render('films/detail', {
          film: mongooseToObject(film),
        });
      })
      .catch(next);
  }
    watch(req, res, next) {
        Film.findOne({ slug: req.params.slug })
          .then((film) => {
            res.render('films/watch', {
              film: mongooseToObject(film),
            });
          })
          .catch(next);
      }
}
module.exports = new FilmController();
