import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ReactLenis from "lenis/react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "William Sæther",
	description: "Fullstack Developer, Student, Freelancer and Video Editor. Passionate about building things that make a difference.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth selection:bg-blue-950 selection:text-blue-400`}
			>
				<ReactLenis root />
				<Header/>
				{children}
			</body>
		</html>
	);
}
