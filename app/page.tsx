import Image from "next/image";
import { motion } from "motion/react"

export default function Home() {
	return (
		<main className="relative flex flex-col items-center justify-center">
			<section id="hero" className="relative min-h-screen w-full mb-10">
				<div className="grid grid-cols-2 gap-x-4 w-full max-w-6xl mx-auto mt-30 relative">
					<div className="flex flex-col justify-center items-start">
						<h1 className="font-bold text-left">
							<span className="text-5xl font-medium">
								I'm
							</span>
							<br/>
							<span className="text-6xl font-extrabold">
								William Sæther
							</span>
							<br/>
							<span className="text-2xl font-bold">
								a Fullstack Developer
							</span>
						</h1>
						<div className="flex gap-4 mt-6">
							<button className="bg-linear-to-r from-blue-200 from-0% to-blue-500 to-100% text-white font-bold p-[1px] rounded-full cursor-pointer">
								<span className="px-5 py-3 rounded-full border-none text-center flex items-center bg-neutral-900">GET IN TOUCH</span>
							</button>
							<button className="bg-linear-to-r from-blue-400 from-0% to-blue-500 to-100% text-white font-bold px-5 py-3 rounded-full cursor-pointer">DOWNLOAD CV</button>
						</div>
						<div className="flex gap-4 mt-4">
							<a href="https://www.linkedin.com/in/williamsaether/">
								<Image className="size-8" src="/images/icons/linkedin.svg" width={20} height={20} alt="LinkedIn" priority/>
							</a>
							<a href="https://github.com/williamsaether">
								<Image className="size-8" src="/images/icons/github.svg" width={20} height={20} alt="GitHub" priority/>
							</a>
						</div>
					</div>
					<Image
						className=""
						src="/images/portrait.webp"
						width={1000}
						height={1234}
						quality={100}
						alt="Picture of William Sæther"
					></Image>
					<div className="h-[2px] col-start-1 col-end-4 bg-linear-to-r from-transparent from-0% via-blue-400 via-80% to-transparent to-100%"></div>
					<div className="absolute top-0 left-0 -right-50 -bottom-100 bg-radial from-blue-600 via-0% to-transparent to-60% -z-10 opacity-[5%]"></div>
				</div>
			</section>
			<div className="w-full max-w-7xl mx-auto">
				<section id="projects">
					<div></div>
				</section>
			</div>
		</main>
	);
}
