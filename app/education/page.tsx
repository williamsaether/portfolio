import React from "react";
import Education from "@/markdown/education.mdx";


export default function ProjectPage() {
	return (
		<div className="prose prose-invert relative flex flex-col justify-center pt-50 max-w-5xl mx-auto">
			<div className="flex flex-col gap-3 items-center col-start-1 col-end-3 mb-20">
				<span className="text-xl font-normal tracking-widest opacity-70">EDUCATION</span>
				<span className="text-6xl font-semibold text-glow">What I've <span className="gradient-text">Studied</span></span>
			</div>
			<div className="items-start">
				<Education/>
			</div>
		</div>
	)
}