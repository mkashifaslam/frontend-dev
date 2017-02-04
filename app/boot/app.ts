import $ = require("jQuery");
import "../css/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
var logo = require("../images/ebryx-logo.png");
import { bindController } from "./loader";

export default () => {
	var page = "signin";
	bindController(page, { title: "Signin" });
}
