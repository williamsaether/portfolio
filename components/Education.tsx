"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function Education() {
	const timelineEvents = [
		{
			id: "hvl",
			title: "Bachelor - HVL",
			school: "Western Norway University of Applied Sciences",
			date: "2022 - 2025",
			description:
				"Bachelor's degree in Computer Engineering at HVL. Studied topics including software engineering, networks, and embedded systems.",
			keyPoints: ["GPA: 4.58 / 5"],
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
			title: "Master - NTNU",
			school: "Norwegian University of Science and Technology",
			date: "2025 - 2027",
			description:
				"Upcoming masters degree in Computer Engineering at NTNU.",
			keyPoints: ["Not started yet"],
			subjects: [
				"Software Dev",
				"Teamwork"
			],
			image: "/images/ntnu.webp",
			position: 70,
		},
	];


	const containerRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start center", "center end"],
	});

	// Progress from 0 → 1 after the first dot
	const progressAfterFirstDot = useTransform(
		scrollYProgress,
		[0, 1],
		[0, 1]
	);

	return (
		<section
			ref={containerRef}
			className="h-[400vh] bg-neutral-900 relative"
		>
			<div className="sticky top-[50vh] mt-[20vh] flex justify-center w-full">
				<div className="relative w-[80%] h-[400px]">
					{/* timeline base */}
					<div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-2 bg-neutral-700 rounded-full" />

					{/* Progress bar, offset to start at first dot */}
					<div
						className="absolute top-1/2 -translate-y-1/2 h-2 overflow-hidden"
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

					{/* All dots and cards */}
					{timelineEvents.map((event, index) => {
						const dotLeft = `${event.position}%`;

						// Determine if the progress bar has reached this dot
						const eventThreshold = (event.position - timelineEvents[0].position) / (100 - timelineEvents[0].position);
						const showEvent = useTransform(
							progressAfterFirstDot,
							[eventThreshold - 0.05, eventThreshold],
							[0, 1]
						);

						const slideX =
							index === 0
								? 0
								: useTransform(showEvent, [0, 1], ["10%", "0%"]);

						const slideScale =
							index === 0
								? 1
								: useTransform(showEvent, [0, 1], [1, 1]);


						return (
							<div
								key={event.id}
								className="absolute h-full"
								style={{ left: dotLeft }}
							>
								{/* Dot */}
								<motion.div
									className="w-4 h-4 rounded-full bg-blue-500"
									style={{
										translateX: "-50%",
										translateY: "-50%",
										top: "50%",
										left: "50%",
										position: "absolute",
										opacity: showEvent,
									}}
								/>

								{/* vertical connector */}
								<motion.div
									className="w-px bg-blue-500"
									style={{
										height: "60px",
										top: "calc(50% - 80px)",
										left: "50%",
										position: "absolute",
										opacity: showEvent,
									}}
								/>

								{/* Card */}
								<motion.div
									className="absolute w-[40rem] h-[21rem] bg-neutral-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between gap-4"
									style={{
										bottom: "calc(50% + 100px)",
										left: "50%",
										translateX: "-50%",
										x: slideX,
										opacity: index === 0 ? 1 : showEvent,
										scale: index === 0 ? 1 : slideScale,
									}}
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
										{event.keyPoints?.map((point, i) => (
											<span
												key={i}
												className="bg-blue-900 text-xs text-white px-3 py-1 rounded-full"
											>
												{point}
											</span>
										))}
									</div>

									<div className="grid grid-cols-[max-content_10rem] justify-between items-center mt-4">
										<div className="grid grid-cols-3 grid-rows-2 gap-2">
											{event.subjects?.map((subject, i) => (
												<span
													key={i}
													className="bg-neutral-700 text-xs text-white px-2 py-1 rounded-md text-center"
												>
												{subject}
											</span>
											))}
										</div>
										{event.image && (
											<Image
												src={event.image}
												alt={event.title}
												width={500}
												height={150}
												className="object-contain w-full rounded-lg"
											/>
										)}
									</div>
								</motion.div>


								{/* Date below timeline */}
								<motion.div
									className="text-blue-400 text-xs absolute text-nowrap"
									style={{
										top: "calc(50% + 20px)",
										left: "50%",
										translateX: "-50%",
										opacity: showEvent,
									}}
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
