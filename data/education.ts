import type { EducationItem } from "@/types";

export const education: EducationItem[] = [
	{
		id: "hvl",
		title: "BSc in Computer Engineering - HVL",
		school: "Western Norway University of Applied Sciences",
		link: "https://www.hvl.no/en/studies-at-hvl/study-programmes/computing/",
		date: "2022 - 2025",
		description: "Bachelor's degree in Computer Engineering at HVL with a GPA of 4.59 / 5. Studied software engineering, algorithms, databases, networking, embedded systems, machine learning, and deep learning.",
		keywords: ["GPA: 4.59 / 5", "Bachelor project: Grade A"],
		subjects: [
			"Programming",
			"Algorithms",
			"Databases",
			"Networking",
			"Software Development",
			"Machine Learning",
			"Deep Learning",
		],
		image: "/images/hvl.webp",
		position: 30,
	},
	{
		id: "ntnu",
		title: "MSc in Computer Science (siv.ing) - NTNU",
		school: "Norwegian University of Science and Technology",
		link: "https://www.ntnu.edu/studies/midt",
		date: "2025 - 2027",
		description: "Ongoing master's degree in Computer Science at NTNU, qualifying as a sivilingeniør. Current focus includes advanced computer science topics, software engineering, and machine learning.",
		keywords: ["Ongoing", "MSc Computer Science"],
		subjects: [
			"Computer Science",
			"Software Engineering",
			"Machine Learning",
		],
		image: "/images/ntnu.webp",
		position: 70,
	},
];
