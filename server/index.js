const koa = require("koa");
const app = new koa();
const { htmlTpl, ejsTpl, pugTpl } = require("./tpl");  //解构赋值的思想
const ejs = require("ejs");
const pug = require("pug");
app.use(async (ctx, next) => {
	ctx.type = "text/html;charset=utf-8";
	ctx.body = pug.render(pugTpl, {
		you: "Luke",
		me: "yang"
	});
});
app.listen(9999);