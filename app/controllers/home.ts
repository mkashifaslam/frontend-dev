import { Project } from '../models/project';

export class Home {
	
	private project;
	
	constructor() {
		this.project = new Project();
	}

	list(): boolean {
		return true;
	}
}