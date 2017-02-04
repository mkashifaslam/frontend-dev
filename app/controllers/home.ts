import { Project } from '../models/project';

export class Home {
	
	private project;
	
	constructor() {
		this.project = new Project();
	}

	list(): void {
		// return the project list
	}
}