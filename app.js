var koa = require('koa');
var app = koa();
var path = require("path");

var entire = require("entire");

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

app.use(entire({
	"permissions": {
		"boring": [
			"index"
		],
		"styled": [
			"style"
		],
		"scripted": [
			"index", "script"
		],
		"views": [
			"index", "views"
		]
	},
	"folder": path.join(__dirname, "features"),
	"ext": "ejs"
}));


app.listen(3000);
