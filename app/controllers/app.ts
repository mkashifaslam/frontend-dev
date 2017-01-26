import $ = require("jQuery");

export default () => {
	 let message = "Hello World!";
   	 $("#app").html(`<h1> ${message} </h1>`);		
}
