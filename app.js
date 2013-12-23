var koa = require('koa');
var app = koa();
var path = require("path");

var featurlets = require("../featurlets");

app.use(function *(next){
	this.permission = "general";
	yield next;
});

app.use(featurlets({
	// "permissions": {
	// 	"general": [
	// 		"hello",
	// 	],
	// 	"holiday": [
	// 		"snow"
	// 	]
	// },
	"folder": path.join(__dirname, "features")
}));

app.listen(3000);
