module.exports = function(app){
	app.modify("index/index", function* (locals){
		if(this.path=="/"){
			locals.name = "Viewer";
		}
	});
}