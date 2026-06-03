export type TechItem = {
	name: string;
	icon: string;
	color?: string;
};

export type ProjectVisual =
	| {
		type: "image";
		src: string;
		alt: string;
	}
	| {
		type: "placeholder";
		label: string;
		accent: string;
	};

export type Project = {
	id: string;
	category: "featured" | "other";
	primaryColor: string;
	secondaryColor: string;
	textColor: string;
	visual: ProjectVisual;
	name: string;
	link?: string;
	linkLabel?: string;
	text: string;
	description: string;
	bulletPoints: string[];
	techStack: TechItem[];
};

export type ExperienceItem = {
	id: string;
	company: string;
	role: string;
	date: string;
	roles?: {
		title: string;
		date: string;
		description?: string;
	}[];
	link?: {
		name: string;
		url: string;
	};
	image?: {
		src: string;
		alt: string;
	};
	description: string;
	highlights: string[];
	stack: TechItem[];
};

export type EducationItem = {
	id: string;
	title: string;
	school: string;
	link: string;
	date: string;
	description: string;
	keywords: string[];
	subjects: string[];
	image: string;
	position: number;
};

export type Achievement = {
	id: string;
	title: string;
	kicker: string;
	description: string;
	meta: string;
};

export type SecurityResearchItem = {
	id: string;
	title: string;
	description: string;
	status: "Private / pending publication";
	notes: string;
};
