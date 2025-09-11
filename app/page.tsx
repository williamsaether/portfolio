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
			<div className="absolute top-0 left-0 right-0 h-[200vh] overflow-hidden">
				<div
					className="absolute top-[150px] left-1/2 -translate-x-2/5 w-[1000px] h-[800px]"
					style={{
						backgroundSize: "90px 90px",
						backgroundImage: "linear-gradient(to right, #aaaaaa4a 1px, transparent 1px), linear-gradient(to bottom, #aaaaaa4a 1px, transparent 1px)",
						maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
						WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 60%)",
						maskSize: "100% 100%",
						WebkitMaskSize: "100% 100%"
					}}
				></div>
				<div className="absolute top-[-700px] right-[-200px] w-[1600px] h-[1400px] bg-radial from-blue-600 via-transparent to-transparent opacity-20"/>
				<div className="absolute top-[-20px] left-[-150px] w-[1400px] h-[1000px] bg-radial from-blue-700 via-transparent to-transparent opacity-10"/>
				<div className="absolute top-[50px] right-[0px] w-[1600px] h-[1200px] bg-radial from-purple-400 via-transparent to-transparent opacity-15"/>
			</div>
			<section id="hero" className="relative min-h-screen w-full mb-10 overflow-hidden">
				<div className="grid grid-cols-2 gap-x-4 w-full max-w-6xl mx-auto mt-30 relative">
					<div className="flex flex-col justify-center items-start">
						<div className="text-left">
							<span className="text-6xl font-bold">
								I'm
							</span>
							<br/>
							<span className="text-6xl font-extrabold gradient-text">
								William Sæther
							</span>
							<br/>
							<span className="text-3xl font-bold">
								a Fullstack Developer
							</span>
						</div>
						<div className="flex gap-3 mt-4">
							<motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/williamsaether/">
								<Image className="size-7" src="/images/icons/linkedin.svg" width={20} height={20} alt="LinkedIn" priority/>
							</motion.a>
							<motion.a whileHover={{ scale: 1.1 }} href="https://github.com/williamsaether">
								<Image className="size-7" src="/images/icons/github.svg" width={20} height={20} alt="GitHub" priority/>
							</motion.a>
						</div>
						<div className="flex gap-4 mt-12">
							<div className="small card-wrapper blue rounded-full cursor-pointer group">
								<div className="card-border"/>
								<div className="card-content">
									<span className="z-10 text-nowrap mx-3 my-auto font-semibold transition-all duration-300 group-hover:text-black">Let's Connect</span>
									<span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0"/>
									<div className="relative w-[38px]">
										<span className="z-10 flex items-center justify-center overflow-hidden rounded-full p-2.5 bg-white transition-colors duration-300 ease-in-out group-hover:bg-transparent">
											<ArrowRight size={18} className="text-black shrink-0 transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0" />
											<ArrowRight size={18} className="text-black absolute transition-all duration-300 -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Image
						className=""
						src="/images/portrait.webp"
						width={1000}
						height={1234}
						quality={100}
						alt="Picture of William Sæther" />
					<div className="h-[2px] col-start-1 col-end-4 bg-linear-to-r from-transparent from-0% via-blue-400 via-80% to-transparent to-100%"></div>
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
					<Education/>
				</section>
			</div>
		</main>
	);
}
