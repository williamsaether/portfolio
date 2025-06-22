import Image from "next/image";
import { motion } from "motion/react"

export default function Home() {
	return (
		<main className="relative flex flex-col items-center justify-center">
			<section className="relative min-h-screen w-full mb-10">
				<div className="grid grid-cols-2 gap-4 w-full max-w-7xl mx-auto">
					<div className="flex flex-col justify-center items-start">
						<h1 className="font-bold text-left">
							<span className="text-5xl">
								I'm
							</span>
							<br/>
							<span className="text-6xl">
								William Sæther
							</span>
							<br/>
							<span className="text-2xl">
								FULLSTACK DEVELOPER
							</span>
						</h1>
						<div className="flex gap-2 mt-4">
							<button className="text-white border-2 border-neutral-800 px-5 py-3 rounded-full">GET IN TOUCH</button>
							<button className="bg-neutral-800 text-white px-5 py-3 rounded-full">DOWNLOAD CV</button>
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
				</div>
			</section>
			<div className="w-full max-w-7xl mx-auto">

			</div>
		</main>
	);
}
