const KoaRouter = require('koa-router');
const appRoot = require('app-root-path');
const requireAll = require('require-all');

const controllers = requireAll(`${appRoot}/app/controllers`);
const middlewares = requireAll(`${appRoot}/app/middlewares`);

const router = new KoaRouter();

// router.use(middlewares.locale);

// Home
router.get('/', controllers.home.get);

// Discover
router.get('/discover', controllers.discover.get);

// Challenges
router.get('/challenges', controllers.challenges.get);

// Join
router.get('/join', controllers.join.get);

module.exports = router;
