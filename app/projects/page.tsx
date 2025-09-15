import Projects from "@/components/Projects";
import React from "react";

export default function ProjectPage() {
	return (
		<div className="relative flex flex-col items-center justify-center pt-50">
			<div className="flex flex-col gap-3 items-center col-start-1 col-end-3 mb-20">
				<span className="text-xl font-normal tracking-widest opacity-70">PROJECTS</span>
				<span className="text-6xl font-semibold text-glow">What I've <span className="gradient-text">Made</span></span>
			</div>
			<Projects/>
		</div>
	)
}