const homeRouter = require('./home');
const searchRouter = require('./search');
const filmRouter = require('./films');
const apiRouter = require('./apis')
const userRouter=require('./user')
function route(app) {
  app.use('/user/apis',userRouter)
  app.use('/apis',apiRouter)
  app.use('/films', filmRouter);
  app.use('/', searchRouter);
  app.use('/', homeRouter);
}
module.exports = route;
