import $ = require("jQuery");
import { User } from '../models/index';
import { Login, Home } from '../controllers/index';

function getUsers() {
	var users = localStorage.getItem("users");
	return users;
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
	var user = {};
	var users = getUsers();
	var usersArr = users.split(":::");
	for(var i=0; i < usersArr.length; i++) {
		var userObj = JSON.parse(usersArr[i]);
		if(userObj.email == email && userObj.password == password) {
			user = userObj;
			break;
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
