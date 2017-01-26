import $ = require("jQuery");
import "../css/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
var logo = require("../images/ebryx-logo.png");

export default () => {
	 let message = "Hello World!";
	 var signin = `<div class="nav-masthead bg-white fixed-top no-print">
				        <nav class="nav">
				          <span class="brand-logo form-signin"><img src="${logo}" width="118" height="27" alt="Ebryx" title="Ebryx" /></span>
				        </nav>
				    </div>
				    
				    <div class="container-fluid">
				      <div class="content-container">
				        <form class="form-signin">
				          <h3>Please sign in</h3>
				          <div class="form-group">            
				            <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Email Address">
				          </div>
				          <div class="form-group">            
				            <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password">
				          </div>
				          <div class="form-group">
				            <button type="button" class="btn btn-primary btn-block">Sign in</button>
				          </div>
				        </form>
				      </div>
				  </div>`;

   	$("body").html(signin);		
}
