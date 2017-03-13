import $ = require("jQuery");
import { Task } from '../models/task';
import { getObjects, setObjectId, getObjectById } from '../boot/db';

export class Tasks {

private task;

constructor() {
	this.task = new Task();
}

add(data: Object): boolean {
		var task = { projectId: 0, id: null, title: null, description: null, hours: 0, dueDate: null, assignedTo: null , status: null, document1: null, document2: null }
		$.each(data['data'], function(index, element) {
			var eleName = element.name;
			var eleVal = element.value;
			if(eleName === "hours") {
				task.hours = parseInt(eleVal);
			} else if (eleName === "title") {
				task.title = eleVal;	
			} else if (eleName === "projectId") {
				task.projectId = parseInt(eleVal);	
			} else if (eleName === "description") {
				task.description = eleVal;	
			} else if (eleName === "assignedTo") {
				task.assignedTo = eleVal;	
			} else if (eleName === "dueDate") {
				task.dueDate = eleVal;	
			} else if (eleName === "status") {
				task.status = eleVal;	
			} else if (eleName === "document1") {
				task.document1 = eleVal;	
			} else if (eleName === "document2") {
				task.document2 = eleVal;	
			}
		});
		this.task = task;
		this.task.id = setObjectId("tsk");
		if(task.title !== "" && task.description !== "" && task.hours > 0) {
			var tasks = getObjects("tasks");
			if( tasks ) {
				tasks.push(this.task);	
			} else {
				tasks = this.task;
			}
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
		//console.log(this.task);
		return true;
	}

}
