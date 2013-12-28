var fs = require("fs");
var path = require("path");

module.exports = function (app){
	app.get("/", function(){
		var file = path.join(__dirname, "./views/index.ejs");
		this.body = fs.readFileSync(file, "utf8");
	});
}