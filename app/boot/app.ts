import $ = require("jQuery");
import "../css/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
var logo = require("../images/ebryx-logo.png");
import loader from "./loader";

export default () => {

	var signin = loader("signin", {title: "Signin"});

   	$("body").html(signin);		
}
