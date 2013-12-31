module.exports = function(app, render, view){
	view.hook("index/index", function* (locals){
		if(this.path=="/"){
			locals.name = "Viewer";
		}
	});
}