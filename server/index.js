const koa = require("koa");
const app = new koa();
app.use(async (ctx, next) => {
	ctx.body = '电影首页';
});
app.listen(9999);