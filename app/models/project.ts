
export class Project {

	constructor(
		public id: number = 0,
		public title: string = null,
		public description: string = null,
		public teamLead: string = null,
		public members: string [] = null,
		public document1: string = null,
		public document2: string = null
	) {
		
	}
}