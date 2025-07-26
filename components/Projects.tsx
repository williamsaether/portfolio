'use client'

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import TechStack from "@/components/TechStack";

export default function Projects() {
	return (
		<div className="grid grid-cols-2 gap-4 w-full max-w-5xl mx-auto my-10">
			<div className="flex flex-col gap-3 items-center col-start-1 col-end-3 mb-20">
				<span className="text-xl font-normal tracking-widest opacity-70">PROJECTS</span>
				<span className="text-6xl font-semibold text-glow">What I've <span className="gradient-text">Created</span></span>
			</div>
			<div className="flex flex-col gap-4">
				<motion.div whileHover={{ scale: 1.005 }} className="card-wrapper rounded-2xl">
					<div className="card-border"/>
					<div className="card-content grid gap-1 p-5">
						<h3 className="text-3xl font-bold">CodeCore</h3>
						<a className="text-sm text-neutral-400 hover:underline w-min" href="https://codecore.bysaether.com" target="_blank">codecore.bysaether.com</a>
						<p>Mobile app for scanning and organizing barcodes & QR codes.</p>
						<Image
							className="max-h-[20rem] h-full w-auto"
							src="/images/codecore.webp"
							width={500}
							height={667}
							quality={100}
							alt="CodeCore" />
						<div className="flex flex-wrap gap-1.5">
							<TechStack name="React Native" icon="react"/>
							<TechStack name="Expo" icon="expo" color="white"/>
							<TechStack name="TypeScript" icon="typescript"/>
							<TechStack name="App Store" icon="appstore"/>
						</div>
					</div>
				</motion.div>
				<motion.div whileHover={{ scale: 1.005 }}  className="card-wrapper rounded-2xl">
					<div className="card-border"/>
					<div className="card-content grid gap-1 p-5">
						<h3 className="text-3xl font-bold">Personal Portfolio</h3>
						<a className="text-sm text-neutral-400 hover:underline w-min" href="https://william.bysaether.com" target="_blank">william.bysaether.com</a>
						<p>A personal portfolio showcasing modern web design and user experience.</p>
						{/*<Image
										className="mx-15 my-5 w-fit h-auto"
										src="/images/portfolio.svg"
										width={2900}
										height={537}
										quality={100}
										alt="Personal Portfolio"
									></Image>*/}
						<div className="flex flex-wrap gap-1.5">
							<TechStack name="Next.js" icon="nextdotjs" color="white" />
							<TechStack name="React" icon="react" />
							<TechStack name="Vercel" icon="vercel" color="white" />
							<TechStack name="Motion.dev" icon="motion" />
							<TechStack name="TypeScript" icon="typescript" />
						</div>
					</div>
				</motion.div>
			</div>
			<div className="flex flex-col gap-4">
				<motion.div whileHover={{ scale: 1.005 }}  className="card-wrapper rounded-2xl">
					<div className="card-border"/>
					<div className="card-content grid gap-1 grid-cols-[auto_auto] grid-rows-[auto_auto_1fr_auto] p-5">
						<h3 className="text-3xl font-bold">CodeGrab</h3>
						<a className="text-sm text-neutral-400 hover:underline w-min" href="https://codegrab.bysaether.com" target="_blank">codegrab.bysaether.com</a>
						<p>Mobile app for scanning and organizing barcodes & QR codes.</p>
						<Image
							className="h-fit w-auto self-center col-start-2 row-start-1 row-end-5"
							src="/images/codegrab.webp"
							width={395}
							height={464}
							quality={100}
							alt="CodeGrab" />
						<div className="flex flex-wrap gap-1.5">
							<TechStack name="TypeScript" icon="typescript" />
							<TechStack name="Chrome Web Store" icon="chromewebstore" />
						</div>
					</div>
				</motion.div>
				<motion.div whileHover={{ scale: 1.005 }}  className="card-wrapper rounded-2xl">
					<div className="card-border"/>
					<div className="card-content grid gap-1 p-5">
						<h3 className="text-3xl font-bold">BySaether.com</h3>
						<a className="text-sm text-neutral-400 hover:underline w-min" href="https://bysaether.com" target="_blank">bysaether.com</a>
						<p>Portfolio website for BySaether</p>
						<Image
							className="mx-15 my-5 w-fit h-auto"
							src="/images/bysaether.svg"
							width={2900}
							height={537}
							quality={100}
							alt="BySaether" />
						<div className="flex flex-wrap gap-1.5">
							<TechStack name="Next.js" icon="nextdotjs" color="white" />
							<TechStack name="React" icon="react" />
							<TechStack name="Vercel" icon="vercel" color="white" />
							<TechStack name="TypeScript" icon="typescript" />
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
