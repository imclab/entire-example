var fs = require("fs");
var path = require("path");

module.exports = function (app, render, view){
	app.get("/", function* indexPage(){
		console.log(render);
		this.body = yield render("index/index"); 
	});
}