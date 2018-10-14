var router = require('express').Router();
var crudDao = require('./app/controller/CRUDDao');
var general = require('./app/controller/General');
var bot = require('./app/controller/Bot');
var middleware = require('./app/helpers/middleware');
router.route('/feedLoad/:id')
    .get(general.feedLoad)
router.route('/filter')
    .post(crudDao.filterByCategory)
router.route('/bot')
    .post(bot.botApi)
router.route('/getProducts/:id')
    .get(general.getProducts)
router.route('/:name/login')
    .post(crudDao.loginCheck)
router.route('/:name/register')
    .post(crudDao.createDocument)
//router.use(middleware.tokenVerify);
router.route('/:name')
    .post(crudDao.createDocument)
    .get(crudDao.getAll)            
router.route('/:name/:id')
    .put(crudDao.updateDocument)
    .get(crudDao.getParticularDocument)
    .delete(crudDao.deleteDocument)

module.exports=router