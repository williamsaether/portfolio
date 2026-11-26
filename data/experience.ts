import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
	{
		id: "sopra-steria",
		company: "Sopra Steria",
		role: "Summer Intern",
		date: "June 2026 - Aug. 2026",
		description: "Worked as a consultant at Sopra Steria on projects for Aker BP, developing user interfaces across several initiatives with a focus on practical, consistent, and accessible digital experiences.",
		highlights: [
			"Developed frontend for Aker BP projects in a consulting team.",
			"Built reusable and accessible UI components.",
			"Received a full-time return offer, starting August 2027.",
		],
		stack: [
			{name: "React", icon: "react"},
			{name: "TypeScript", icon: "typescript"},
			{name: "Design Systems", icon: "storybook"},
		],
	},
	{
		id: "vizrt",
		company: "Vizrt",
		role: "Software Developer, Bachelor Project",
		date: "2025",
		link: {name: "Bachelor's thesis", url: "https://hdl.handle.net/11250/3201308"},
		image: {
			src: "/images/pictures/vizrt.webp",
			alt: "Vizrt App Launcher project preview",
		},
		description: "Worked with Vizrt as a real client to build a centralized app launcher system for web applications. The project covered full-stack development, reusable frontend components, admin tooling, data modeling, and user evaluation.",
		highlights: [
			"Delivered a grade A bachelor project in industry collaboration.",
			"Built Vue, TypeScript, Express, and PostgreSQL features.",
			"Worked in an agile Scrumban process with client feedback.",
		],
		stack: [
			{name: "Vue", icon: "vuedotjs"},
			{name: "TypeScript", icon: "typescript"},
			{name: "Express", icon: "express", color: "white"},
			{name: "PostgreSQL", icon: "postgresql"},
		],
	},
	{
		id: "bysaether",
		company: "BySaether",
		role: "Founder & Developer",
		date: "2023 - Present",
		image: {
			src: "/images/pictures/bysaether.webp",
			alt: "BySaether website preview",
		},
		description: "Independent software development initiative focused on building and publishing practical consumer and developer-facing products. Responsible for the complete lifecycle of multiple web, mobile, and browser-based applications, from concept and design to deployment, maintenance, and user support.",
		highlights: [
			"Designed, developed, and published mobile applications, browser extensions, and web platforms.",
			"Managed product architecture, deployment, hosting, domains, analytics, and user support.",
			"Iterated on products based on testing, user feedback, and real-world usage.",
		],
		stack: [
			{name: "React Native", icon: "react"},
			{name: "Next.js", icon: "nextdotjs", color: "white"},
			{name: "TypeScript", icon: "typescript"},
			{name: "Node.js", icon: "nodedotjs"},
			{name: "Product Development", icon: "product-development"},
			{name: "UI/UX Design", icon: "figma"},
		],
	},
	{
		id: "abakusrevyen",
		company: "Abakusrevyen",
		role: "Technology Manager (Teknikksjef)",
		date: "2027",
		roles: [
			{
				title: "Technology Manager (Teknikksjef)",
				date: "2027",
				description: "Leads the technical crew and the technical work on the revue's new web platform.",
			},
			{
				title: "Media and Technical Contributor",
				date: "2026",
				description: "Contributed to technical production, PR video, and photography.",
			},
		],
		description: "Volunteer work for NTNU's computer science revue. Leads the technical crew for rehearsals and shows, and leads development of the revue's new web platform in a small team.",
		highlights: [
			"Leads the technical crew (sound, lighting, stage and streaming) and plans equipment and training.",
			"Leading development of the new website: livestreaming with chat, paid access and AbakusID login.",
			"Set up the team's code review and branch workflow.",
		],
		stack: [
			{name: "Technical Project Management", icon: "technical-project-management"},
			{name: "TypeScript", icon: "typescript"},
			{name: "Supabase", icon: "supabase"},
			{name: "Cloudflare", icon: "cloudflareworkers"},
			{name: "Event Production", icon: "sparkles"},
		],
	},
];
