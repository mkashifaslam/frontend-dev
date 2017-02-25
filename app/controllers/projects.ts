import $ = require("jQuery");
import { Project } from '../models/project';

export class Projects {
	
	private project;
	
	constructor() {
		this.project = new Project();
	}

	add(data: Object): boolean {
		console.log(data);
		var members = [];
		var project = { title: null, description: null, members: [], teamLead: null, document1: null, document2: null }
		$.each(data['data'], function(index, element) {
			var eleName = element.name;
			var eleVal = element.value;
			if(eleName === "members") {
				project.members.push(eleVal);
			} else if (eleName === "title") {
				project.title = eleVal;	
			} else if (eleName === "description") {
				project.description = eleVal;	
			} else if (eleName === "teamLead") {
				project.teamLead = eleVal;	
			} else if (eleName === "document1") {
				project.document1 = eleVal;	
			} else if (eleName === "document2") {
				project.document2 = eleVal;	
			}
		});
		this.project = project;
		console.log(this.project);
		return false;
	}

	list(): boolean {
		return true;
	}
}