import $ = require("jQuery");
import { User } from '../models/index';
import { Login, Home } from '../controllers/index';
import { Router } from './router';

function viewLoader(page: string, data: Object) {
	var template = require(`../templates/${page}.ejs`);
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
		case "home_project":
			controllerClass = new Home();
			eventBinder("home_project", controllerClass);
			break;
		case "add_project":
			controllerClass = new Home();
			eventBinder("add_project", controllerClass);
			break;
		case "project_detail":
			controllerClass = new Home();
			eventBinder("project_detail", controllerClass);
			break;		
		case "users":
			controllerClass = new Home();
			eventBinder("users", controllerClass);
			break;
		case "add_task":
			controllerClass = new Home();
			eventBinder("add_task", controllerClass);
			break;
		case "project":
			controllerClass = new Home();
			eventBinder("project", controllerClass);
			break;
		case "task_detail":
			controllerClass = new Home();
			eventBinder("task_detail", controllerClass);
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
		$("table").on('click', 'a', function(){
			eventHandler("home_project", controller, {title: eventName});
		});
	} else if(eventName == "add_project") {
		$("form").on('click', 'button', function(){
			eventHandler(eventName, controller, {title: eventName});
		});
	} else if(eventName == "project_detail") {
		$("form").on('click', 'button', function(){
			eventHandler(eventName, controller, {title: eventName});
		});
	} else if(eventName == "users") {
		$("form").on('click', 'button', function(){
			eventHandler(eventName, controller, {title: eventName});
		});
	} else if(eventName == "project") {
		$(".task-link").on('click', 'a', function(){
			eventHandler(eventName, controller, {title: eventName});
		});
		$(".task-title").on('click', 'a', function(){
			eventHandler("project_task", controller, {title: eventName});
		});
	} else if(eventName == "add_task") {
		$("form").on('click', 'button', function(){
			eventHandler(eventName, controller, {title: eventName});
		});
	} else if(eventName == "task_detail") {
		$(".form-group").on('click', 'button', function(){
			eventHandler(eventName, controller, {title: eventName});
		});
	}

	$(".nav").on('click', 'a', function(){
		var eventName = $(this).attr("id")+"_nav_link";
		eventHandler(eventName, controller, {title: eventName});
	});
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
		case "home_nav_link":
			bindController("home", {title: "Add Project"});
			break;
		case "user_nav_link":
			bindController("users", {title: "Users"});
			break;
		case "login":
			bindController("signup", {title: "Signup"});
			break;
		case "signup":
			bindController("home", {title: "Home"});
			break;		
		case "home":
			bindController("add_project", {title: "Add Project"});
			break;
		case "home_project":
			bindController("project", {title: "Project Dashboard"});
			break;
		case "add_project":
			bindController("home", {title: "Home"});
			break;
		case "project_detail":
			bindController("home", {title: "Home"});
			break;
		case "project":
			bindController("add_task", {title: "Project Dashboard"});
			break;
		case "task_detail":
			bindController("project", {title: "Task Detail"});
			break;
		case "project_task":
			bindController("task_detail", {title: "Task Detail"});
			break;	
		case "add_task":
			bindController("project", {title: "Project Dashboard"});
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
