var fs = require("fs");
var path = require("path");
var reqMore = require("require-more")();

module.exports = function (app){
	app.get("/", function indexPage(){
		console.log(require("script/test"));
		var file = path.join(__dirname, "./views/index.ejs");
		this.body = fs.readFileSync(file, "utf8");
	});
}