'use client'

import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import {usePathname} from "next/navigation";
import { FileDown } from "lucide-react";

export default function Header() {
	const pathname = usePathname()

	useEffect(() => {
		const userAgent = navigator.userAgent;
		const isSafari = /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(userAgent);

		document.documentElement.classList.toggle("is-safari", isSafari);

		return () => {
			document.documentElement.classList.remove("is-safari");
		};
	}, []);

	return (
		<div>
			<div className="pointer-events-none fixed top-0 left-0 z-30 w-full h-24">
				<div className="pointer-events-none absolute inset-0 opacity-100 backdrop-blur-xs mask-linear-[black,black,black,transparent_100%]"/>
				<div className="pointer-events-none absolute inset-0 opacity-100 backdrop-blur-sm mask-linear-[black,transparent_80%,transparent_100%]"/>
			</div>
			<nav className="fixed top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 mx-auto w-full max-w-7xl flex justify-between items-center z-50 h-[48px]">
				<Link href="/" className="hidden lg:block z-40">
					<Image className="size-9" src="/images/logo.svg" width={100} height={100} alt="Logo" priority/>
				</Link>
				<div
					className="bg-neutral-800 fixed left-1/2 transform -translate-x-1/2 p-1 z-40 border-1 border-gray-600 rounded-full"
					style={{ boxShadow: "0px 0px 20px #95afff30"}}
				>
					<ul className="hidden lg:flex gap-2">
						<li className="relative">
							<Link className="inline-block px-4 py-1" href="/">Home</Link>
							{pathname == "/" && <div className="bg-neutral-700 absolute inset-0 w-full rounded-full -z-10">
								<div
									className="bg-neutral-100 absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full"></div>
							</div>}
						</li>
						<li className="relative">
							<Link className="inline-block px-4 py-1" href="/projects">Projects</Link>
							{pathname == "/projects" && <div className="bg-neutral-700 absolute inset-0 w-full rounded-full -z-10">
								<div
									className="bg-neutral-100 absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full"></div>
							</div>}
						</li>
						<li className="relative">
							<Link className="inline-block px-4 py-1" href="/experience">Experience</Link>
							{pathname == "/experience" && <div className="bg-neutral-700 absolute inset-0 w-full rounded-full -z-10">
								<div
									className="bg-neutral-100 absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full"></div>
							</div>}
						</li>
						<li className="relative">
							<Link className="inline-block px-4 py-1" href="/education">Education</Link>
							{pathname == "/education" && <div className="bg-neutral-700 absolute inset-0 w-full rounded-full -z-10">
								<div
									className="bg-neutral-100 absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full"></div>
							</div>}
						</li>
					</ul>
					<div className="flex lg:hidden items-center gap-14 px-2 py-0 h-[32px]">
						<Image className="size-6" src="/images/logo.svg" width={100} height={100} alt="Logo" priority/>
						<span className="text-lg font-bold">william</span>
					</div>
				</div>
				<a
					href="/William-Saether-CV.pdf"
					className="hidden lg:inline-flex z-40 items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-semibold transition-colors hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300"
				>
					<FileDown size={16} aria-hidden="true" />
					Download CV
				</a>
			</nav>
		</div>
	);
}
