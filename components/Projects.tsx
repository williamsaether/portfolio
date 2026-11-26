'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollCard } from "@/components/ScrollCard";
import TechStack from "@/components/TechStack";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

export default function Projects() {
	const [activeId, setActiveId] = useState<string | null>(projects[0].id);

	const featuredProjects = projects.filter((project) => project.category === "featured");
	const otherProjects = projects.filter((project) => project.category === "other");
	const active = featuredProjects.find((p) => p.id === activeId) || featuredProjects[0] || null;

	return (
		<div className="relative w-full max-w-7xl mb-20 flex flex-col gap-16 px-8 sm:px-12 md:px-16 lg:px-8 py-12">
			<ProjectGroup
				title="Featured Projects"
				projects={featuredProjects}
				activeId={activeId}
				setActiveId={setActiveId}
				active={active}
				showDetails
			/>
			<ProjectGroup
				title="Other Projects"
				projects={otherProjects}
				activeId={activeId}
				setActiveId={setActiveId}
			/>
		</div>
	);
}

type ProjectGroupProps = {
	title: string;
	projects: typeof projects;
	activeId: string | null;
	setActiveId: (id: string) => void;
	active?: (typeof projects)[number] | null;
	showDetails?: boolean;
};

function ProjectGroup({ title, projects, activeId, setActiveId, active, showDetails = false }: ProjectGroupProps) {
	return (
		<div>
			<div className="mb-8">
				<h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
			</div>
			<div className="flex flex-col lg:flex-row gap-8">
				<div className={`flex flex-col gap-16 ${showDetails ? "lg:w-3/5" : "lg:grid lg:grid-cols-2 lg:w-full"}`}>
					{projects.map((card) => (
						<div key={card.id} className="flex flex-col gap-4">
							<ScrollCard
								card={card}
								compact={!showDetails}
								action={(id) => {
									if (showDetails && activeId !== id) setActiveId(id);
								}}
							/>
							<ProjectSummary card={card} className={showDetails ? "lg:hidden" : ""} />
						</div>
					))}
				</div>

				{showDetails && (
					<div className="hidden lg:block sticky w-2/5 top-8 py-4 text-white">
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
										<h3 className="text-3xl font-bold">
											{active.name}
										</h3>
										{active.link && (
											<a className="text-base font-semibold text-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 rounded-sm" href={active.link} target="_blank" rel="noopener noreferrer">
												{active.linkLabel ?? active.link.split("//")[1] ?? active.link}
											</a>
										)}
										<p className="text-gray-300">{active.description}</p>
										<ul className="stylized-list">
											{active.bulletPoints.map((bulletPoint) => (
												<li key={bulletPoint}>
													<svg
														aria-hidden="true"
														style={{
															background: "conic-gradient(" +
																active.textColor + ", " +
																active.secondaryColor + ", " +
																active.textColor + ")"
														}}/>{bulletPoint}</li>
											))}
										</ul>
										<div className="flex gap-2 flex-wrap">
											{active.techStack.map((tech) => (
												<TechStack key={`${active.id}-${tech.name}`} {...tech} />
											))}
										</div>
									</motion.div>
								) : (
									<motion.div
										key="placeholder"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<p>Scroll a project to see details.</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

function ProjectSummary({ card, className = "" }: { card: Project; className?: string }) {
	const [expanded, setExpanded] = useState(false);
	const hasMore = card.description.length > 150 || card.bulletPoints.length > 0;

	return (
		<div className={`flex flex-col gap-2 ${className}`}>
			<h3 className="text-3xl font-bold">
				{card.name}
			</h3>
			{card.link && (
				<a className="text-base font-semibold text-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 rounded-sm" href={card.link} target="_blank" rel="noopener noreferrer">
					{card.linkLabel ?? card.link.split("//")[1] ?? card.link}
				</a>
			)}
			<p className={`text-gray-300 ${expanded ? "" : "line-clamp-3"}`}>{card.description}</p>
			{expanded && card.bulletPoints.length > 0 && (
				<ul className="stylized-list text-sm text-neutral-300">
					{card.bulletPoints.map((bulletPoint) => (
						<li key={bulletPoint}>
							<svg aria-hidden="true" />
							{bulletPoint}
						</li>
					))}
				</ul>
			)}
			{hasMore && (
				<button
					type="button"
					className="w-fit text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 rounded-sm"
					onClick={() => setExpanded((current) => !current)}
					aria-expanded={expanded}
				>
					{expanded ? "Show less" : "Read more"}
				</button>
			)}
			<div className="flex gap-2 flex-wrap">
				{card.techStack.map((tech) => (
					<TechStack key={`${card.id}-${tech.name}`} {...tech} />
				))}
			</div>
		</div>
	);
}
