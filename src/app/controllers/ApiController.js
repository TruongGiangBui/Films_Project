const Film = require('../models/Films');

class ApiController {
    allfilms(req,res,next) {
        Film.find()
            .then(films => {
                res.send(films);
        }).catch(next)
    }
    mostviewsfilms(req, res, next) {
        Film.find(
            {},//search filter
            ['movie_name_eng','poster_link','slug','views'],//column return
            {
                skip: 0, //starting row
                limit: 10,//end
                sort: {
                    views:-1//DESC
                }
            }
        ).then(films => {
            res.send(films);
        }).catch(next)
    }
}
module.exports = new ApiController();
