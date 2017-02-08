import $ = require("jQuery");
import "../css/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
var logo = require("../images/ebryx-logo.png");
import { auth, bindController } from "./loader";
import { getUser, getUsers } from './db';

export default () => {
	var page = "signin";
	if(auth(getUser())) {
		page = "home"
		bindController(page, { title: "Home" });
	} else {
		bindController(page, { title: "Signin" });	
	}
}
