
export class Task {

	constructor(
		public id: number = 0,
		public projectId: number = 0,
		public title: string = null,
		public hours: number = 0,
		public dueDate: string = null,
		public description: string = null,
		public assignedTo: string = null,
		public status: string = null,
		public document1: string = null,
		public document2: string = null
	) {
		
	}
}