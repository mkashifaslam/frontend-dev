import { User } from '../models/user';

export class Login {
	
	private user;
	
	constructor() {
		this.user = new User();
	}

	loginHandler(data): boolean {
		var email = data['email']; 
		var password = data['password'];
		this.user.email = email;
		this.user.password = password;
		console.log('click on login button'+JSON.stringify(this.user));
		return true;
	}

	signUpHandler(data): boolean {
		this.user.email = data['email']; 
		this.user.password = data['password'];
		this.user.email = data['firstName'];
		this.user.password = data['lastName'];
		this.user.role = data['role'];
		console.log('click on signup button'+JSON.stringify(this.user));
		return true;
	}
}