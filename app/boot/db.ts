import $ = require("jQuery");
import { User } from '../models/index';
import { Login, Home } from '../controllers/index';

function getUsers() {
	var userObjs = [];
	var users = localStorage.getItem("users");
	if(users) {
		userObjs = JSON.parse(users);
	}

	return userObjs;
}

function getUser() {
	var user = localStorage.getItem("user");
	if(user) {
		var userObj = JSON.parse(user);
		return userObj;
	}
	return {};
}
function userAuth(email: "", password: "") {
	var user = null;
	var users = getUsers();
	if(users) {
		for(var i=0; i < users.length; i++) {
			var userObj = users[i];
			if(userObj['email'] == email && userObj['password'] == password) {
				user = userObj;
				break;
			}
		}	
	}
	return user;	
}
function setUser(user) {
	localStorage.setItem("user", user);
}
export {
	getUser,
	getUsers,
	setUser,
	userAuth
}
