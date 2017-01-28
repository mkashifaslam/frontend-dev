
export default (page: string = "signin", data: Object = {}) => {
	
	var template = require(`../templates/${page}.ejs`);
	
	return template(data);
}
