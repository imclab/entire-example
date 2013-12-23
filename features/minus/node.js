module.exports = function(app){
	app.post("/minus", function*(){
		this.body = {msg:"hello world"}
	});
}