module.exports = function(app){
	app.get("/", function(){
		this.body = this.permission+": Welcome";
	});
}