import { User } from '../models/user';

export class Login {
	
	private user;
	
	constructor() {
		this.user = new User();
	}

	loginHandler(data): void {
		var email = data['email']; 
		var password = data['password'];
		this.user.email = email;
		this.user.password = password;
		alert('click on login button'+JSON.stringify(this.user));
	}
}