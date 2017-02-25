import $ = require("jQuery");
import { User } from '../models/index';
import { Login, Home } from '../controllers/index';

function getObjects(type = "users") {
	var typeObjs = [];
	var objs = localStorage.getItem(type);
	if(objs) {
		typeObjs = JSON.parse(objs);
	}

	return typeObjs;
}

function getObj(type = "user") {
	var obj = localStorage.getItem(type);
	if(obj) {
		var typeObj = JSON.parse(obj);
		return typeObj;
	}
	return {};
}

function setObjectId(type = "usr") {
	var newCountVal = getObjectId(type);
	console.log("====new id value====="+newCountVal);
	localStorage.setItem(type+"_count", newCountVal);
	return newCountVal;
}

function getObjectId(type = "usr") {
	var countVal = (localStorage.getItem(type+"_count")) ? parseInt(localStorage.getItem(type+"_count")) : 0;
	if(countVal > 0) {
		countVal = countVal + 1;
	} else {
		countVal = 1;
	}
	return countVal.toString();
}
function userAuth(email: "", password: "") {
	var user = null;
	var users = getObjects();
	if(users) {
		for(var i=0; i < users.length; i++) {
			var userObj = users[i];
			if(userObj['email'] === email && userObj['password'] === password) {
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
	getObj,
	getObjects,
	setUser,
	setObjectId,
	userAuth
}
