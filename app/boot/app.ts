import $ = require("jQuery");
import "../css/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
var logo = require("../images/ebryx-logo.png");
import { viewLoader, bindController } from "./loader";

export default () => {
	var page = "signin";
	var pageHtml = viewLoader(page, {title: "Signin"});
   	$("body").addClass("bg-success").html(pageHtml);
   	bindController(page);
}
