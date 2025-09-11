'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollCard } from "@/components/ScrollCard";
import TechStack from "@/components/TechStack";

export type Card = {
	id: string;
	primaryColor: string;
	secondaryColor: string;
	textColor: string;
	image: string;
	name: string;
	link: string;
	text: string;
	description: string;
	techStack: React.JSX.Element[];
};

const cards: Card[] = [
	{
		id: "codecore",
		primaryColor: "#003975",
		secondaryColor: "#387bbd",
		textColor: "#a4d2ff",
		image: "/images/pictures/codecore.webp",
		name: "CodeCore",
		link: "https://codecore.bysaether.com",
		text: "Mobile app for scanning and organizing barcodes & QR codes.",
		description: "A description ...",
		techStack: [
			<TechStack name="React Native" icon="react"/>,
			<TechStack name="Expo" icon="expo" color="white"/>,
			<TechStack name="TypeScript" icon="typescript"/>,
			<TechStack name="App Store" icon="appstore"/>
		]
	},
	{
		id: "codegrab",
		primaryColor: "#003975",
		secondaryColor: "#387bbd",
		textColor: "#a4d2ff",
		image: "/images/pictures/codegrab.webp",
		name: "CodeGrab",
		link: "https://codegrab.bysaether.com",
		text: "Chrome extension for retrieving values from websites and generating QR/barcodes.",
		description: "A description ...",
		techStack: [
			<TechStack name="TypeScript" icon="typescript" />,
			<TechStack name="Chrome Web Store" icon="chromewebstore" />
		]
	},
	{
		id: "portfolio",
		primaryColor: "#003975",
		secondaryColor: "#387bbd",
		textColor: "#a4d2ff",
		image: "/images/pictures/portfolio.webp",
		name: "Personal Portfolio",
		link: "https://william.bysaether.com",
		text: "A personal portfolio showcasing modern web design and user experience.",
		description: "A description ...",
		techStack: [
			<TechStack name="Next.js" icon="nextdotjs" color="white" />,
			<TechStack name="React" icon="react" />,
			<TechStack name="Vercel" icon="vercel" color="white" />,
			<TechStack name="Motion.dev" icon="motion" />,
			<TechStack name="TypeScript" icon="typescript" />
		]
	},
	{
		id: "bysaether",
		primaryColor: "#003975",
		secondaryColor: "#387bbd",
		textColor: "#a4d2ff",
		image: "/images/pictures/bysaether.webp",
		name: "BySaether.com",
		link: "https://william.bysaether.com",
		text: "Portfolio website for BySaether",
		description: "A description ...",
		techStack: [
			<TechStack name="Next.js" icon="nextdotjs" color="white" />,
			<TechStack name="React" icon="react" />,
			<TechStack name="Vercel" icon="vercel" color="white" />,
			<TechStack name="TypeScript" icon="typescript" />
		]
	}
];

export default function Projects() {
	const [activeId, setActiveId] = useState<string | null>(cards[0].id);

	const activeExp = cards.find((p) => p.id === activeId) || null;

	return (
		<div className="w-full max-w-7xl mb-20 flex gap-8 px-8 py-12">
			<div className="flex flex-col gap-24 w-3/5">
				{cards.map((card) => (
					<ScrollCard
						key={card.id}
						card={card}
						onInView={(id) => {
							if (activeId !== id) setActiveId(id);
						}}
					/>
				))}
			</div>

			<div className="w-2/5 sticky top-8 py-4 text-white">
				<div className="w-full sticky top-56 text-white">
					<AnimatePresence mode="wait">
						{activeExp ? (
							<motion.div
								key={activeExp.id}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.1}}
								className="relative ml-14"
							>
								<span
									className="absolute top-4 -left-14 w-8 h-1 rounded-full outline-2"
									style={{ background: activeExp.primaryColor, outlineColor: (activeExp.primaryColor + "20") }}/>
								<h2 className="text-3xl font-bold mb-2">
									{activeExp.name}
								</h2>
								<h3 className="text-base font-semibold mb-2 text-neutral-400">
									{activeExp.link}
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
