import $ = require("jQuery");
import { User } from '../models/index';
import { Login, Home } from '../controllers/index';

function getUser() {
	var users = localStorage.getItem("users");
}
export {
	getUser
}
