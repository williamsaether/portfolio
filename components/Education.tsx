"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const timelineEvents = [
	{
		id: "hvl",
		title: "BSc in Computing - HVL",
		school: "Western Norway University of Applied Sciences",
		link: "https://www.hvl.no/en/studies-at-hvl/study-programmes/computing/",
		date: "2022 - 2025",
		description:
			"Bachelor's degree in Computer Engineering at HVL. Studied topics including software engineering, networks, " +
			"and embedded systems. Specialized in machine learning and artificial intelligence.",
		keywords: ["GPA: 4.58 / 5"],
		subjects: [
			"Networking",
			"Embedded Systems",
			"Databases",
			"Software Dev",
			"Security",
			"AI Basics",
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
		description:
			<>
				Upcoming masters degree in Computer Science at NTNU. I will qualify
				as a <a href="https://en.wikipedia.org/wiki/Sivilingeniør" target="_blank" rel="noreferrer" className="underline">
					sivilingeniør
				</a>, not to be confused with a civil engineer.</>,
		keywords: ["Not started yet"],
		subjects: [
			"Software Dev",
			"Teamwork"
		],
		image: "/images/ntnu.webp",
		position: 70,
	},
];

export default function Education() {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start center", "end end"],
	});

	const progressAfterFirstDot = useTransform(
		scrollYProgress,
		[0, 1],
		[0, 1]
	);

	return (
		<section ref={containerRef} className="h-[200vh] relative mt-[40vh]">
			<div className="sticky top-[50vh] flex justify-center w-full">
				<div className="relative w-[80%] h-[400px]">
					<div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-2 bg-neutral-700 rounded-full">
						<motion.div
							className="absolute top-0 h-2 bg-blue-500 rounded-full origin-left"
							style={{ width: `${timelineEvents[0].position}%` }}
						/>
					</div>
					<div
						className="absolute top-1/2 -translate-y-1/2 h-2"
						style={{
							left: `${timelineEvents[0].position}%`,
							width: `${100 - timelineEvents[0].position}%`,
						}}
					>
						<motion.div
							className="h-2 bg-blue-500 rounded-full origin-left"
							style={{
								scaleX: progressAfterFirstDot,
							}}
						/>
					</div>

					{timelineEvents.map((event, index) => {
						const dotLeft = `${event.position}%`;
						const eventThreshold = (event.position - timelineEvents[0].position) / (100 - timelineEvents[0].position);
						const showEvent = index === 0 ? 1 : useTransform(
							progressAfterFirstDot,
							[eventThreshold - 0.15, eventThreshold - 0.05, eventThreshold + 0.04],
							[0, 0.1, 1]
						);
						// @ts-ignore
						const slideX = index === 0 ? 0 : useTransform(showEvent, [0, 1], ["10%", "0%"]);
						// @ts-ignore
						const slideDisplay = index === 0 ? 1 : useTransform(showEvent, [0, 1], ["none", "flex"]);

						return (
							<div
								key={event.id}
								className="absolute h-full"
								style={{ left: dotLeft }}
							>
								<motion.div
									className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500"
									style={{ opacity: showEvent }}/>
								<motion.div
									className="absolute left-1/2 -translate-x-1/2 w-[3px] h-16 rounded-full bg-blue-500"
									style={{ top: "calc(50% - 85px)", opacity: showEvent }}/>
								<motion.div
									className="absolute left-1/2 -translate-x-1/2 w-[40rem] h-[21rem] bg-neutral-800
										rounded-2xl shadow-xl p-6 flex flex-col justify-between gap-2"
									// @ts-ignore
									style={{ bottom: "calc(50% + 100px)", x: slideX, opacity: showEvent, display: slideDisplay }}
								>
									<div>
										<h3 className="text-2xl font-extrabold text-white">{event.title}</h3>
										<p className="text-blue-400 font-medium">{event.school}</p>
										<span className="text-sm text-blue-300">{event.date}</span>
									</div>
									<p className="text-white text-sm leading-relaxed ml-5 relative my-auto">
										<span className="absolute w-1 h-full -left-5 rounded-full bg-neutral-700"></span>
										{event.description}
									</p>
									<div className="flex flex-wrap gap-2 mt-2">
										{event.keywords?.map((point, i) => (
											<span key={i} className="bg-blue-900 text-xs text-white px-3 py-1 rounded-full">{point}</span>
										))}
									</div>
									<div className="grid grid-cols-[max-content_10rem] justify-between items-center mt-4">
										<div className="grid grid-cols-3 grid-rows-2 gap-2">
											{event.subjects?.map((subject, i) => (
												<span key={i} className="bg-neutral-700 text-xs text-white px-2 py-1 rounded-md text-center">
													{subject}
												</span>
											))}
										</div>
										{event.image && (
											<a href={event.link} target="_blank" rel="noreferrer" className="relative">
												<Image
													src={event.image}
													alt={event.title}
													width={500}
													height={150}
													className="object-contain w-full"
												/>
											</a>
										)}
									</div>
								</motion.div>
								<motion.div
									className="left-1/2 -translate-x-1/2 text-blue-400 text-xs absolute text-nowrap"
									style={{ top: "calc(50% + 20px)", opacity: showEvent }}
								>
									{event.date}
								</motion.div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
