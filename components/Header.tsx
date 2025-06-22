import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<nav className="fixed top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 mx-auto w-full max-w-7xl flex justify-between items-center z-50">
			<Link href="/" className="">
				<Image className="size-9" src="/images/icons/logo.svg" width={100} height={100} alt="Logo" priority/>
			</Link>
			<div className="bg-neutral-800 fixed  left-1/2 transform -translate-x-1/2 p-1 border-1 border-gray-600 rounded-full shadow-lg">
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
		</nav>
	);
}