'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollCard } from "@/components/ScrollCard";

type Project = {
	id: string;
	company: string;
	role: string;
	description: string;
};

const projects: Project[] = [
	{
		id: "vizrt",
		company: "Vizrt",
		role: "Software Developer (Bachelor Project)",
		description:
			"Worked on an app launcher for Vizrt's web platform. Developed Vue and Node.js components, " +
			"collaborated in an agile team, and learned enterprise-level software practices.",
	},
	{
		id: "bysaether",
		company: "BySaether (Freelance)",
		role: "Freelance Developer & Designer",
		description:
			"Built modern web applications and mobile apps under my own brand. Design work " +
			"and technical implementation using Next.js, React Native, and Tailwind CSS.",
	},
	{
		id: "obsbygg",
		company: "Obs BYGG",
		role: "Retail Employee",
		description:
			"Assisted customers with products and services, learned valuable communication and " +
			"problem-solving skills, and gained experience in customer support.",
	},
];

export default function Experience() {
	const [activeId, setActiveId] = useState<string | null>(projects[0].id);

	const activeExp = projects.find((p) => p.id === activeId) || null;

	return (
		<div className="flex gap-8 px-8 py-12">
			<div className="flex flex-col gap-24 w-3/5">
				{projects.map((proj) => (
					<ScrollCard
						key={proj.id}
						id={proj.id}
						title={proj.company}
						onInView={(id) => {
							if (activeId !== id) setActiveId(id);
						}}
					/>
				))}
			</div>

			<div className="w-2/5 sticky top-8 p-8 text-white">
				<div className="w-full sticky top-56 text-white">
					<AnimatePresence mode="wait">
						{activeExp ? (
							<motion.div
								key={activeExp.id}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.3 }}
							>
								<h2 className="text-3xl font-bold mb-2">
									{activeExp.company}
								</h2>
								<h3 className="text-xl font-semibold mb-2">
									{activeExp.role}
								</h3>
								<p className="text-gray-300">{activeExp.description}</p>
							</motion.div>
						) : (
							<motion.div
								key="placeholder"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<p>Click an experience to see details →</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}
