'use client'

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import TechStack from "@/components/TechStack";
import { experience } from "@/data/experience";
import type { ExperienceItem } from "@/types";

export default function Experience() {
	const leftColumn = experience.filter((_, index) => index % 2 === 0);
	const rightColumn = experience.filter((_, index) => index % 2 === 1);

	function Card({card}: { card: ExperienceItem }) {
		return (
			<motion.div whileHover={{ scale: 1.005 }} className="card-wrapper rounded-2xl">
				<div className="card-border"/>
				<div className="card-content grid gap-2 p-5">
					<h3 className="text-3xl font-bold">{card.company}</h3>
					{card.roles ? (
						<div className="grid gap-2">
							{card.roles.map((role) => (
								<div key={`${role.title}-${role.date}`} className="rounded-xl border border-neutral-800 bg-neutral-950/50 px-3 py-2">
									<p className="text-sm font-semibold text-neutral-300">{role.title} · {role.date}</p>
									{role.description && (
										<p className="text-sm text-neutral-500">{role.description}</p>
									)}
								</div>
							))}
						</div>
					) : (
						<p className="text-sm text-neutral-400">{card.role} · {card.date}</p>
					)}
					{card.link && (
						<a href={card.link.url} target="_blank" rel="noreferrer" className="text-sm text-neutral-500 underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 rounded-sm">{card.link.name}</a>
					)}
					<p>{card.description}</p>
					<ul className="stylized-list">
						{card.highlights.map((highlight) => (
							<li key={highlight}>
								<svg aria-hidden="true" />
								{highlight}
							</li>
						))}
					</ul>
					{card.image && (
						<Image
							className="max-h-[20rem] h-full w-auto mx-auto rounded-xl"
							src={card.image.src}
							width={500}
							height={667}
							quality={100}
							priority
							alt={card.image.alt}
						/>
					)}
					<div className="flex flex-wrap gap-1.5">
						{card.stack.map((tech) => (
							<TechStack key={`${card.id}-${tech.name}`} {...tech} />
						))}
					</div>
				</div>
			</motion.div>
		)
	}

	return (
		<div className="flex flex-col gap-4 w-full max-w-5xl mx-auto px-10 lg:px-5">
			<div className="flex flex-col gap-3 items-center mb-20 text-center">
				<span className="text-xl font-normal tracking-widest opacity-70">EXPERIENCE</span>
				<span className="text-6xl font-semibold text-glow">What I&apos;ve <span className="gradient-text">Done For Work</span></span>
			</div>
			<div className="flex flex-col gap-4 lg:hidden">
				{experience.map((card) => (
					<Card key={card.id} card={card} />
				))}
			</div>
			<div className="hidden lg:flex gap-4 items-start">
				<div className="flex flex-1 flex-col gap-4">
					{leftColumn.map((card) => (
						<Card key={card.id} card={card} />
					))}
				</div>
				<div className="flex flex-1 flex-col gap-4">
					{rightColumn.map((card) => (
						<Card key={card.id} card={card} />
					))}
				</div>
			</div>
		</div>
	);
}
