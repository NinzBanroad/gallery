const Koa = require('koa');
const appRoot = require('app-root-path');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const path = require('path');
const mongoose = require('mongoose');

const app = new Koa();
const port = Process.env.PORT || 5000;

// const config = require(`${appRoot}/config`);

const index = require('./app/routes/routes');

app.use(bodyParser());
app.use(serve('./public'));

async function server() {
	// try {
	// 	await mongoose.connect(config.ecmaid_api.mongodb.main, {
	// 		useNewUrlParser: true
	// 	});
	// 	console.log('Database connected..');

	// } catch (err) {
	// 	console.log(err);
    // }
    app.listen(port, () => console.log(`running on port ${port}`));

}

render(app, {
	root: path.join(__dirname, 'app/views'),
	layout: 'layout',
	viewExt: 'ejs',
	cache: false
});

app.use(index.routes(), index.allowedMethods());

server();
