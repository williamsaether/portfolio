'use client'

import Image from "next/image";
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react";
import React from "react";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<main className="relative flex flex-col items-center justify-center">
			<div className="absolute top-0 left-0 right-0 h-[150vh] lg:h-[200vh] overflow-hidden">
				<div
					className="absolute top-[150px] left-1/2 -translate-x-2/5 w-[1000px] h-[800px] max-w-full max-h-2/5 bg-size-[60_60] lg:bg-size-[90_90]"
					style={{
						backgroundImage: "linear-gradient(to right, #aaaaaa4a 1px, transparent 1px), linear-gradient(to bottom, #aaaaaa4a 1px, transparent 1px)",
						maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
						WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 60%)",
						maskSize: "100% 100%",
						WebkitMaskSize: "100% 100%"
					}}
				></div>
				<div className="absolute top-[-400px] lg:top-[-700px] right-[-200px] w-[1600px] h-[1400px] max-h-1/2 bg-radial from-blue-600 via-transparent to-transparent opacity-20"/>
				<div className="absolute top-[-20px] left-[-150px] w-[1400px] h-[1000px] max-h-1/2 bg-radial from-blue-700 via-transparent to-transparent opacity-10"/>
				<div className="absolute top-[50px] right-[0px] w-[1600px] h-[1200px] max-h-1/2 bg-radial from-purple-400 via-transparent to-transparent opacity-15"/>
			</div>
			<section id="hero" className="relative min-h-screen w-full mb-10 overflow-hidden">
				<div className="grid grid-rows-[auto_20rem] lg:grid-cols-2 gap-x-4 w-full max-w-6xl mx-auto mt-40 lg:mt-30 px-10 relative">
					<div className="flex flex-col gap-4 justify-center items-start">
						<div className="text-left">
							<span className="text-4xl lg:text-6xl font-bold">
								I'm
							</span>
							<br/>
							<span className="text-4xl lg:text-6xl font-extrabold gradient-text">
								William Sæther
							</span>
							<br/>
							<span className="text-2xl lg:text-3xl font-bold">
								a Fullstack Developer
							</span>
						</div>
						<div className="flex gap-3">
							<motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/williamsaether/">
								<Image className="size-7" src="/images/icons/linkedin.svg" width={20} height={20} alt="LinkedIn" priority/>
							</motion.a>
							<motion.a whileHover={{ scale: 1.1 }} href="https://github.com/williamsaether">
								<Image className="size-7" src="/images/icons/github.svg" width={20} height={20} alt="GitHub" priority/>
							</motion.a>
						</div>
						<div className="hidden lg:flex gap-4 lg:mt-8">
							<div className="small card-wrapper blue rounded-full cursor-pointer group">
								<div className="card-border"/>
								<a className="card-content" href="https://contact.bysaether.com" target="_blank" rel="noopener noreferrer">
									<span className="z-10 text-nowrap mx-3 my-auto font-semibold transition-all duration-300 group-hover:text-black">Let's Connect</span>
									<span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0"/>
									<div className="relative w-[38px]">
										<span className="z-10 flex items-center justify-center overflow-hidden rounded-full p-2.5 bg-white transition-colors duration-300 ease-in-out group-hover:bg-transparent">
											<ArrowRight size={18} className="text-black shrink-0 transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0" />
											<ArrowRight size={18} className="text-black absolute transition-all duration-300 -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
										</span>
									</div>
								</a>
							</div>
						</div>
					</div>
					<Image
						className="h-full w-auto mx-auto"
						src="/images/portrait.webp"
						width={1000}
						height={1234}
						priority
						quality={100}
						alt="Picture of William Sæther" />
					<div className="flex gap-2 absolute bottom-10 left-1/2 -translate-x-1/2 pl-1 pr-2 py-1 bg-[#262626aa]
						rounded-full border-1 border-neutral-700 text-sm font-bold text-nowrap">
						<span className="py-0.5 px-1.5 bg-indigo-600 rounded-full text-xs">DEV</span>
						Website under Construction
					</div>
					<div className="h-[2px] col-start-1 lg:col-end-4 bg-linear-to-r from-transparent from-0% via-blue-400 via-80% to-transparent to-100%"></div>
				</div>
			</section>
			<div>
				<section id="projects">
					<Projects/>
				</section>
				<section id="skills">
					<Skills/>
				</section>
				<section id="experience">
					<Experience/>
				</section>
				<section id="education">
					<div className="flex flex-col gap-3 items-center col-start-1 col-end-3 mb-20 mt-30">
						<span className="text-xl font-normal tracking-widest opacity-70">EDUCATION</span>
						<span className="text-6xl font-semibold text-glow">What I've <span className="gradient-text">Studied</span></span>
					</div>
					<Education/>
				</section>
			</div>
		</main>
	);
}
