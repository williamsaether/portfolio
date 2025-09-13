'use client'

import {
	Aperture,
	Brain, BrainCircuit,
	CodeXml,
	Cpu, Film,
	GitBranch,
	Layout,
	Paintbrush,
	Server,
	Video
} from "lucide-react";
import React from "react";
import TechStack from "@/components/TechStack";
import OtherStack from "@/components/OtherStack";

export default function Skills() {
	return (
		<div className="grid grid-cols-3 gap-4 w-full max-w-6xl mx-auto my-20">
			<div className="flex flex-col gap-3 items-center col-start-1 col-end-4 mb-20">
				<span className="text-xl font-normal tracking-widest opacity-70">MY SKILLS</span>
				<span className="text-6xl font-semibold text-glow">My Secret <span className="gradient-text">Weapons</span></span>
			</div>
			<div className="skills-card">
				<div className="flex gap-4 text-2xl items-center">
					<span className="p-3 rounded-xl bg-neutral-900 border-1 border-neutral-800">
						<CodeXml size={24} color="currentColor" />
					</span>
					Frontend Development
				</div>
				<div className="flex flex-wrap gap-1.5">
					<TechStack name="Next.js" icon="nextdotjs" color="white" />
					<TechStack name="Vue.js" icon="vuedotjs" />
					<TechStack name="React" icon="react" />
					<TechStack name="React Native" icon="react" />
					<TechStack name="Expo" icon="expo" color="white" />
					<TechStack name="Motion.dev" icon="motion" />
					<TechStack name="TypeScript" icon="typescript" />
					<TechStack name="Tailwind CSS" icon="tailwindcss" />
				</div>
			</div>
			<div className="skills-card">
				<div className="flex gap-4 text-2xl items-center">
					<span className="p-3 rounded-xl bg-neutral-900 border-1 border-neutral-800">
						<Server size={24} color="currentColor" />
					</span>
					Backend Development
				</div>
				<div className="flex flex-wrap gap-1.5">
					<TechStack name="Node.js" icon="nodedotjs" />
					<TechStack name="Java" icon="java" />
					<TechStack name="Python" icon="python" />
				</div>
			</div>
			<div className="skills-card">
				<div className="flex gap-4 text-2xl items-center">
					<span className="p-3 rounded-xl bg-neutral-900 border-1 border-neutral-800">
						<Layout size={24} color="currentColor" />
					</span>
					UI/UX Design
				</div>
				<div className="flex flex-wrap gap-1.5">
					<TechStack name="Figma" icon="figma" />
				</div>
			</div>
			<div className="skills-card">
				<div className="flex gap-4 text-2xl items-center">
					<span className="p-3 rounded-xl bg-neutral-900 border-1 border-neutral-800">
						<Cpu size={24} color="currentColor" />
					</span>
					Tools & Technologies
				</div>
				<div className="flex flex-wrap gap-1.5">
					<TechStack name="Vercel" icon="vercel" color="white" />
					<TechStack name="Namecheap" icon="namecheap"/>
				</div>
			</div>
			<div className="skills-card">
				<div className="flex gap-4 text-2xl items-center">
					<span className="p-3 rounded-xl bg-neutral-900 border-1 border-neutral-800">
						<GitBranch size={24} color="currentColor" />
					</span>
					Other
				</div>
				<div className="flex flex-wrap gap-1.5">
					<OtherStack name="Artificial Intelligence" icon={<Brain size={16} color="#9bf332" />} />
					<OtherStack name="Machine Learning" icon={<BrainCircuit size={16} color="#3b95ff" />} />
				</div>
			</div>
			<div className="skills-card">
				<div className="flex gap-4 text-2xl items-center">
					<span className="p-3 rounded-xl bg-neutral-900 border-1 border-neutral-800">
						<Paintbrush size={24} color="currentColor" />
					</span>
					Creative Skills
				</div>
				<div className="flex flex-wrap gap-1.5">
					<TechStack name="Adobe Products" icon="adobe" />
					<OtherStack name="Videography" icon={<Video size={16} color="currentColor" />} />
					<OtherStack name="Photography" icon={<Aperture size={16} color="currentColor" />} />
					<OtherStack name="Video Editing" icon={<Film size={16} color="currentColor" />} />
				</div>
			</div>
		</div>
	);
}
