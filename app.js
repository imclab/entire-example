var koa = require('koa');
var app = koa();
var path = require("path");

var entire = require("entire");

app.use(function *(next){
	this.permission = "default";
	yield next;
});

app.use(entire({
	"permissions": {
		"default": [
			"entire-react",
			"example-index"
		]
	},
	"ext": "ejs"
}));


app.listen(3000);
