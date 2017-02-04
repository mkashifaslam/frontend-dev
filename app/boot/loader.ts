import $ = require("jQuery");
import { User } from '../models/index';
import { Login, Home } from '../controllers/index';
import { Router } from './router';

function viewLoader(page: string, data: Object) {
	var template = require(`../templates/${page}.ejs`);
	console.log(JSON.stringify(template));
	var $main = $("body").addClass('bg-success');
	$main.html(template(data));
}

function bindController(controller, data) {
	var controllerClass;
	viewLoader(controller, data);
	switch (controller) {
		case "signin":
			controllerClass = new Login();
			eventBinder("login", controllerClass);
			break;
		case "signup":
			controllerClass = new Login();
			eventBinder("signup", controllerClass);
			break;
		case "home":
			controllerClass = new Home();
			eventBinder("home", controllerClass);
			break;
		case "add_project":
			controllerClass = new Home();
			eventBinder("add_project", controllerClass);
			break;		
		default:
			controllerClass = new Login();
			eventBinder("login", controllerClass);
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
	} else if(eventName == "signup") {
		$("form").on('click', '#submit', function(){
			 data["email"] = $('#email').val();
			 data["password"] =  $('#password').val();
			 data["role"] = $('#role').val();
			 data["firstName"] = $('#firstName').val();
			 data["lastName"] = $('#lastName').val();
			 eventHandler(eventName, controller, data);
		});	
	} else if(eventName == "home") {
		$(".task-link").on('click', 'a', function(){
			eventHandler(eventName, controller, {title: eventName});
		});
	} else if(eventName == "add_project") {
		$(".task-link").on('click', 'a', function(){
			eventHandler(eventName, controller, {title: eventName});
		});
	}
}

function eventHandler(eventName, controller, data) {
	if(eventName == "login") {
	 	var action = controller.loginHandler(data);
	 	
	} else if (eventName == "signup") {
		var action = controller.signUpHandler(data);
	} else if(eventName == "home") {
		var action = controller.list(data);
	}

	routeHandler(eventName, controller);
}

function routeHandler(eventName, controller) {
	switch (eventName) {
		case "login":
			bindController("signup", {title: "Signup"});
			break;
		case "signup":
			bindController("home", {title: "Home"});
			break;		
		case "home":
			bindController("add_project", {title: "Home"});
			break;
		default:
			bindController("signup", {title: "Signup"});
			break;	
	}
}

export {
	viewLoader,
	bindController,
	routeHandler,
}
