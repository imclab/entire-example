if(process.env.NODE_PATH!="local_modules"){
	console.log("NODE_PATH must be set to local_modules");
	process.exit(1);
}

var koa = require('koa');
var app = koa();

var entire = require("entire");

app.use(entire("index-page"));
app.use(entire(""))

app.listen(3000);
