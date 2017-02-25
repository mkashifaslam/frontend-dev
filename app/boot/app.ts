import $ = require("jQuery");
import "../css/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
var logo = require("../images/ebryx-logo.png");
import { auth, bindController } from "./loader";
import { getObj, getObjects } from './db';

export default () => {
	var page = "signin";
	if(auth(getObj())) {
		page = "home"
		bindController(page, { title: "Home" , projects: getObjects("projects")});
	} else {
		bindController(page, { title: "Signin" });	
	}
}
