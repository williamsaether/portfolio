'use client'

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import type { Project } from "@/types";

type CardProps = {
	card: Project;
	action: (id: string) => void;
	compact?: boolean;
};

export function ScrollCard({ card, action, compact = false }: CardProps) {
	const ref = useRef<HTMLDivElement | null>(null);

	const animationInView = useInView(ref, { once: false, amount: 0.15 });
	const triggerInView = useInView(ref, { once: false, amount: 0.7 });

	const prevInView = useRef(false);

	useEffect(() => {
		if (triggerInView && !prevInView.current) {
			action(card.id);
		}
		prevInView.current = triggerInView;
	}, [triggerInView, card.id, action]);

	const content = (
		<div
			className={`w-full h-full flex flex-col justify-between overflow-hidden rounded-2xl ${compact ? "px-6 sm:px-10" : "px-8 sm:px-16"}`}
			style={{
				backgroundColor: "white",
				backgroundImage: "linear-gradient(190deg, " + card.primaryColor + " 20%, " + card.secondaryColor + " 60%, " + card.secondaryColor + "40 100%)"
			}}
		>
			<p className={`hidden sm:block ${compact ? "text-xl mt-8 mb-5" : "text-2xl mt-12 mb-8"}`} style={{ color: card.textColor }}>{card.text}</p>
			<ProjectVisual card={card} />
		</div>
	);

	return (
		<motion.div
			ref={ref}
			className={`${compact ? "sm:h-[340px] md:h-[410px] lg:h-[370px] xl:h-[410px]" : "sm:h-[450px] md:h-[550px] lg:h-[500px] xl:h-[550px]"} relative rounded-3xl cursor-pointer group p-2 bg-neutral-800 border-1 border-neutral-700`}
			initial={{ scale: 0.9, opacity: 0 }}
			animate={animationInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}
		>
			<div className="absolute top-0 left-4 right-4 h-[1px] bg-linear-90 from-transparent via-white to-transparent" />
			<div className="absolute top-2 left-4 right-4 h-[1px] bg-linear-90 from-transparent via-[#ffffffbf] to-transparent" />
			{card.link ? (
				<a href={card.link} target="_blank" rel="noreferrer" className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 rounded-2xl">
					{content}
				</a>
			) : (
				content
			)}
		</motion.div>
	);
}

function ProjectVisual({ card }: { card: Project }) {
	if (card.visual.type === "placeholder") {
		return (
			<div className="translate-y-5 transition-all duration-300 lg:group-hover:scale-105 lg:group-hover:-rotate-3 scale-105 -rotate-3 lg:scale-100 lg:rotate-0">
				<div
					className="relative aspect-3/2 rounded-t-2xl border-1 border-white/20 overflow-hidden bg-neutral-950"
					style={{ boxShadow: "0 0 15px " + card.secondaryColor }}
					aria-label={`${card.name} visual placeholder`}
				>
					<div
						className="absolute inset-0 opacity-60"
						style={{
							backgroundImage: `linear-gradient(135deg, ${card.primaryColor}, ${card.secondaryColor}), radial-gradient(circle at 75% 25%, ${card.visual.accent}, transparent 35%)`,
						}}
					/>
					<div className="absolute inset-6 grid grid-rows-[1fr_auto] rounded-xl border border-white/25 bg-black/25 p-6">
						<div className="grid grid-cols-3 gap-3 opacity-70">
							<span className="rounded-lg bg-white/20" />
							<span className="rounded-lg bg-white/10" />
							<span className="rounded-lg bg-white/15" />
							<span className="col-span-2 rounded-lg bg-white/10" />
							<span className="rounded-lg bg-white/20" />
						</div>
						<span className="text-3xl font-black tracking-normal text-white">{card.visual.label}</span>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="translate-y-5 transition-all duration-300 lg:group-hover:scale-105 lg:group-hover:-rotate-3 scale-105 -rotate-3 lg:scale-100 lg:rotate-0">
			<Image
				src={card.visual.src}
				alt={card.visual.alt}
				width={800}
				height={600}
				quality={100}
				priority
				className="rounded-t-2xl border-1 border-white/20 aspect-3/2 object-cover"
				style={{ boxShadow: "0 0 15px " + card.secondaryColor }}
			/>
		</div>
	);
}
