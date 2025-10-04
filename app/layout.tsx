import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactLenis from "lenis/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

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
				<SpeedInsights/>
				<Analytics/>
				<ReactLenis root />
				<Header/>
				{children}
				<Footer/>
			</body>
		</html>
	);
}
