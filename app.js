var koa = require('koa');
var app = koa();
var path = require("path");

var featurlets = require("../featurlets");

app.use(function *(next){
	if(/\/basic\//.test(this.path)){
		this.permission = "basic";
		this.path = this.path.replace("/basic", "");
	}
	else if(/\/scientific\//.test(this.path)){
		this.permission = "scientific";
		this.path = this.path.replace("/scientific", "");
	}
	yield next;
});

app.use(featurlets({
	"permissions": {
		"basic": [
			"minus", "plus", "equals", "index"
		],
		"scientific": [
			"square-root", "minus", "plus", "equals", "index"
		]
	},
	"folder": path.join(__dirname, "features")
}).all);


app.listen(3000);
