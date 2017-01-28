import $ = require("jQuery");
import { User } from '../models/index';
import { Login } from '../controllers/index';

function viewLoader(page: string, data: Object) {
	
	var template = require(`../templates/${page}.ejs`);
		
	return template(data);
}

function bindController(controller) {
	var controller;
	switch (controller) {
		case "signin":
			controller = new Login();
			eventBinder("login", controller);
			break;
		default:
			controller = new Login();
			controller.loginHandler();
			break;
	}
}

function eventBinder(eventName, controller) {
	var data = [];
	if(eventName == "login") {
		$("form").on('click', '#submit', function(){
			 data["email"] = $('#email').val();
			 data["password"] =  $('#password').val();
			 eventHandler(eventName, controller, data);
		});	
	}
}

function eventHandler(eventName, controller, data) {
	if(eventName == "login") {
	 	controller.loginHandler(data);
	}
}

export {
	viewLoader,
	bindController
}
