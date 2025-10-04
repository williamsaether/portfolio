import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="flex flex-col max-w-6xl mx-auto my-6 gap-10 px-5 text-nowrap">
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-0 flex-1 items-start justify-between bg-neutral-900 p-10 rounded-3xl">
				<div className="hidden lg:flex flex-col gap-10">
					<Image
						src="/images/logo.svg"
						alt="BySaether logo"
						width="40"
						height="40"
						quality={100}
					/>
					<p className="text-sm text-wrap">I'm William - a Computer Science student at NTNU. Thanks for checking out my site!</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between lg:w-1/4 items-start px-4">
					<div className="grid grid-cols-3 lg:flex lg:flex-col gap-2">
						<h3 className="font-bold col-start-1 col-end-4">General</h3>
						<Link className="text-sm" href="/">Home</Link>
						<Link className="text-sm" href="/projects">Projects</Link>
						<Link className="text-sm" href="/experience">Experience</Link>
						<Link className="text-sm" href="/education">Education</Link>
					</div>
					<div className="grid grid-cols-3 lg:flex lg:flex-col gap-2">
						<h3 className="font-bold col-start-1 col-end-4">Reach out</h3>
						<a className="text-sm" href="https://www.linkedin.com/in/williamsaether">LinkedIn</a>
						<a className="text-sm" href="https://github.com/williamsaether">GitHub</a>
					</div>
				</div>
			</div>
			<div className="opacity-60 ml-10">
				© 2025 William Sæther
			</div>
		</div>
	)
}