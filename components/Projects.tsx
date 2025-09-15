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
	bulletPoints: string[];
	techStack: React.JSX.Element[];
};

const cards: Card[] = [
	{
		id: "codecore",
		primaryColor: "#2a7cae",
		secondaryColor: "#43d9fd",
		textColor: "#ceebfd",
		image: "/images/pictures/codecore.webp",
		name: "CodeCore",
		link: "https://codecore.bysaether.com",
		text: "Mobile app for scanning and organizing barcodes & QR codes.",
		description: "A mobile app designed to scan, save, and organize barcodes and QR codes. " +
			"CodeCore makes it easy to keep track of everyday codes, open them in the right context, " +
			"and customize how you use them. Built with speed, simplicity, and a seamless mobile-first " +
			"experience in mind.",
		bulletPoints: [
			"Instant barcode & QR code scanning with blazing-fast recognition.",
			"Organize codes with custom names, pinned favorites, and lists.",
			"Published on the Apple App Store."
		],
		techStack: [
			<TechStack key="reactnative" name="React Native" icon="react"/>,
			<TechStack key="expo" name="Expo" icon="expo" color="white"/>,
			<TechStack key="typescript" name="TypeScript" icon="typescript"/>,
			<TechStack key="appstore" name="App Store" icon="appstore"/>
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
		description: "A lightweight browser extension that turns any number on a webpage into a scannable code. " +
			"Built for speed and convenience, CodeGrab blends into your browsing flow, making QR and barcode " +
			"generation just a right-click away.",
		bulletPoints: [
			"On-demand QR & barcode generation directly in the browser.",
			"Domain-specific memory for smart auto-generation.",
			"Fully client-side with no backend for maximum privacy."
		],
		techStack: [
			<TechStack key="typescript" name="TypeScript" icon="typescript" />,
			<TechStack key="chromewebstore" name="Chrome Web Store" icon="chromewebstore" />
		]
	},
	{
		id: "portfolio",
		primaryColor: "#33008e",
		secondaryColor: "#5a6edf",
		textColor: "#c5a4ff",
		image: "/images/pictures/portfolio.webp",
		name: "Personal Portfolio",
		link: "https://william.bysaether.com",
		text: "A personal portfolio showcasing modern web design and user experience.",
		description: "A personal showcase of projects, achievements, and skills - crafted with modern web design and " +
			"smooth interactivity. The site highlights both technical and creative expression, serving as a professional " +
			"hub for future opportunities.",
		bulletPoints: [
			"Interactive elements showcasing projects, education and work.",
			"Dynamic visuals powered by modern frameworks and animation."
		],
		techStack: [
			<TechStack key="nextjs" name="Next.js" icon="nextdotjs" color="white"/>,
			<TechStack key="react" name="React" icon="react"/>,
			<TechStack key="typescript" name="TypeScript" icon="typescript"/>,
			<TechStack key="motiondev" name="Motion.dev" icon="motion"/>,
			<TechStack key="tailwindcss" name="Tailwind CSS" icon="tailwindcss"/>,
			<TechStack key="vercel" name="Vercel" icon="vercel" color="white"/>,
			<TechStack key="mdx" name="MDX" icon="mdx" color="fcb32c"/>
		],
	},
	{
		id: "bysaether",
		primaryColor: "#0f60aa",
		secondaryColor: "#3da0fd",
		textColor: "#bde0fd",
		image: "/images/pictures/bysaether.webp",
		name: "BySaether.com",
		link: "https://bysaether.com",
		text: "Portfolio website for BySaether.",
		description: "The digital home for BySaether - a brand uniting projects, products, and creative ventures. " +
			"Built as a sleek, fast-loading static site, it provides visitors a clean overview of apps, projects, " +
			"and ways to connect.",
		bulletPoints: [
			"Central hub linking apps, portfolio, and support channels.",
			"Modern design with a strong, consistent brand identity.",
			"Lightweight static build for reliability and speed."
		],
		techStack: [
			<TechStack key="next.js" name="Next.js" icon="nextdotjs" color="white" />,
			<TechStack key="react" name="React" icon="react" />,
			<TechStack key="vercel" name="Vercel" icon="vercel" color="white" />,
			<TechStack key="typescript" name="TypeScript" icon="typescript" />
		]
	}
];

export default function Projects() {
	const [activeId, setActiveId] = useState<string | null>(cards[0].id);

	const active = cards.find((p) => p.id === activeId) || null;

	return (
		<div className="w-full max-w-7xl mb-20 flex gap-8 px-8 py-12">
			<div className="flex flex-col gap-24 w-3/5">
				{cards.map((card) => (
					<ScrollCard
						key={card.id}
						card={card}
						action={(id) => {
							if (activeId !== id) setActiveId(id);
						}}
					/>
				))}
			</div>

			<div className="w-2/5 sticky top-8 py-4 text-white">
				<div className="w-full sticky top-56 text-white">
					<AnimatePresence mode="wait">
						{active ? (
							<motion.div
								key={active.id}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.1}}
								className="relative ml-14 flex flex-col gap-1"
							>
								<span
									className="absolute top-4 -left-14 w-8 h-1 rounded-full outline-2"
									style={{ background: active.secondaryColor, outlineColor: (active.primaryColor + "20") }}/>
								<h2 className="text-3xl font-bold">
									{active.name}
								</h2>
								<a className="text-base font-semibold text-neutral-400" href={active.link} target="_blank" rel="noopener noreferrer">
									{active.link.split('//')[1]}
								</a>
								<p className="text-gray-300">{active.description}</p>
								<ul className="stylized-list">
									{active.bulletPoints.map((bulletPoint, index) => (
										<li key={index}>
											<svg
												style={{
													background: "conic-gradient(" +
														active.textColor + ", " +
														active.secondaryColor + ", " +
														active.textColor + ")"
											}}/>{bulletPoint}</li>
									))}
								</ul>
								<div className="flex gap-2 flex-wrap">
									{active.techStack}
								</div>
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
