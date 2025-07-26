import Link from "next/link";
import Image from "next/image";
import {File, FileUser} from "lucide-react";
import React from "react";

export default function Header() {
	return (
		<div>
			<div className="pointer-events-none fixed top-0 left-0 z-30 w-full h-24">
				<div className="pointer-events-none absolute inset-0 opacity-100 backdrop-blur-xs mask-linear-[black,black,black,transparent_100%]"/>
				<div className="pointer-events-none absolute inset-0 opacity-100 backdrop-blur-sm mask-linear-[black,transparent_80%,transparent_100%]"/>
			</div>
			<nav className="fixed top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 mx-auto w-full max-w-7xl flex justify-between items-center z-50">
				<Link href="/" className="z-40">
					<Image className="size-9" src="/images/logo.svg" width={100} height={100} alt="Logo" priority/>
				</Link>
				<div
					className="bg-neutral-800 fixed left-1/2 transform -translate-x-1/2 p-1 z-40 border-1 border-gray-600 rounded-full"
					style={{ boxShadow: "0px 0px 20px #95afff30"}}
				>
					<ul className="flex gap-2">
						<li className="relative">
							<Link className="inline-block px-4 py-1" href="/">Home</Link>
							<div className="bg-neutral-700 absolute inset-0 w-full rounded-full -z-10">
								<div className="bg-neutral-100 absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full"></div>
							</div>
						</li>
						<li className="relative">
							<Link className="inline-block px-4 py-1" href="/projects">Projects</Link>
							<div></div>
						</li>
						<li className="relative">
							<Link className="inline-block px-4 py-1" href="/experience">Experience</Link>
							<div></div>
						</li>
						<li className="relative">
							<Link className="inline-block px-4 py-1" href="/education">Education</Link>
							<div></div>
						</li>
					</ul>
				</div>
				<Link href="/" className="relative z-40">
					<span className="absolute top-2/3 left-1/2 -translate-1/2 text-xs font-bold">CV</span>
					<File className="size-8" />
				</Link>
			</nav>
		</div>
	);
}