import Image from "next/image";
import { motion } from "motion/react"
import TechIcon from "@/components/TechIcon";

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
			<div className="w-full max-w-7xl mx-auto h-screen">
				<section id="projects">
					<div className="grid grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
						<div className="flex flex-col gap-4">
							<div className="grid gap-1 p-5 rounded-2xl bg-neutral-900 border-1 border-neutral-800">
								<h3 className="text-3xl font-bold">CodeCore</h3>
								<a className="text-sm text-neutral-400 hover:underline w-min" href="https://codecore.bysaether.com" target="_blank">codecore.bysaether.com</a>
								<p>Mobile app for scanning and organizing barcodes & QR codes.</p>
								<Image
									className="max-h-[20rem] h-full w-auto"
									src="/images/codecore.webp"
									width={500}
									height={667}
									quality={100}
									alt="CodeCore"
								></Image>
								<div className="flex flex-wrap gap-1.5">
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="react"/>React Native</span>
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="expo" color="white" />Expo</span>
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="typescript" />TypeScript</span>
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="appstore" />App Store</span>
								</div>
							</div>
							<div className="grid gap-1 p-5 rounded-2xl bg-neutral-900 border-1 border-neutral-800">
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
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="nextdotjs" color="white" />Next.js</span>
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="react" />React</span>
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="vercel" color="white" />Vercel</span>
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="motion" />Motion.dev</span>
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="typescript" />TypeScript</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div className="grid gap-1 grid-cols-[auto_auto] grid-rows-[auto_auto_1fr_auto] p-5 rounded-2xl bg-neutral-900 border-1 border-neutral-800">
								<h3 className="text-3xl font-bold">CodeGrab</h3>
								<a className="text-sm text-neutral-400 hover:underline w-min" href="https://codegrab.bysaether.com" target="_blank">codegrab.bysaether.com</a>
								<p>Mobile app for scanning and organizing barcodes & QR codes.</p>
								<Image
									className="h-fit w-auto self-center col-start-2 row-start-1 row-end-5"
									src="/images/codegrab.webp"
									width={395}
									height={464}
									quality={100}
									alt="CodeGrab"
								></Image>
								<div className="flex flex-wrap gap-1.5">
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="typescript" />TypeScript</span>
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="chromewebstore" />Chrome Web Store</span>
								</div>
							</div>
							<div className="grid gap-1 p-5 rounded-2xl bg-neutral-900 border-1 border-neutral-800">
								<h3 className="text-3xl font-bold">BySaether.com</h3>
								<a className="text-sm text-neutral-400 hover:underline w-min" href="https://bysaether.com" target="_blank">bysaether.com</a>
								<p>Portfolio website for BySaether</p>
								<Image
									className="mx-15 my-5 w-fit h-auto"
									src="/images/bysaether.svg"
									width={2900}
									height={537}
									quality={100}
									alt="BySaether"
								></Image>
								<div className="flex flex-wrap gap-1.5">
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="nextdotjs" color="white" />Next.js</span>
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="react" />React</span>
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="Vercel" color="white" />Vercel</span>
									<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800"><TechIcon name="typescript" />TypeScript</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
