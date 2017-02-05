import $ = require("jQuery");
import "../css/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
var logo = require("../images/ebryx-logo.png");
import { bindController } from "./loader";

export default () => {
	var page = "signin";
	var user = localStorage.getItem('user');
	if(user != undefined) {
		page = "home";
		bindController(page, { title: "Home" });
	} else {
		bindController(page, { title: "Signin" });	
	}
}
