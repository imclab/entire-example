module.exports = function(app){
	app.get("/minus", function*(){
		this.body = "what";
	});
}