// => returns the template function compiled with undesrcore (lodash) templating engine.

export default (page: string = "signin", data: Object = {}) => {
	
	var template = require(`./${page}.ejs`);
	
	console.log(data);
	
	return template(data); // Pass object with data	
}
