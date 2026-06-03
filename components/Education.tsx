"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { education } from "@/data/education";

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
	const secondEventOpacity = useTransform(progressAfterFirstDot, [0.35, 0.45, 0.7], [0, 0.1, 1]);
	const secondEventSlideX = useTransform(secondEventOpacity, [0, 1], ["10%", "0%"]);

	return (
		<section ref={containerRef} className="h-[200vh] relative mt-[40vh]">
			<div className="sticky top-[50vh] flex justify-center w-full">
				<div className="relative w-[80%] h-[400px]">
					<div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-2 bg-neutral-700 rounded-full">
						<motion.div
							className="absolute top-0 h-2 bg-blue-500 rounded-full origin-left"
							style={{ width: `${education[0].position}%` }}
						/>
					</div>
					<div
						className="absolute top-1/2 -translate-y-1/2 h-2"
						style={{
							left: `${education[0].position}%`,
							width: `${100 - education[0].position}%`,
						}}
					>
						<motion.div
							className="h-2 bg-blue-500 rounded-full origin-left"
							style={{
								scaleX: progressAfterFirstDot,
							}}
						/>
					</div>

					{education.map((event, index) => {
						const dotLeft = `${event.position}%`;
						const showEvent = index === 0 ? 1 : secondEventOpacity;
						const slideX = index === 0 ? 0 : secondEventSlideX;

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
									style={{ bottom: "calc(50% + 100px)", x: slideX, opacity: showEvent }}
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
									<div className="grid grid-cols-[auto_10rem] justify-between items-center mt-4">
										<div className="flex flex-wrap gap-2">
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
													quality={100}
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
