var koa = require('koa');
var app = koa();
var path = require("path");

var featurlets = require("../featurlets");

app.use(function *(next){
	if(/\/styled\//.test(this.path)){
		this.permission = "styled";
		this.path = this.path.replace("/styled", "");
	}
	else if(/\/scripted\//.test(this.path)){
		this.permission = "scripted";
		this.path = this.path.replace("/scripted", "");
	}
	else{
		this.permission = "boring";
	}
	yield next;
});

app.use(featurlets({
	"permissions": {
		"boring": [
			"index"
		],
		"styled": [
			"style"
		],
		"scripted": [
			"index", "script"
		]
	},
	"folder": path.join(__dirname, "features")
}).all);


app.listen(3000);
