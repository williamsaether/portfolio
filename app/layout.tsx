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
	metadataBase: new URL("https://william.bysaether.com"),
	title: {
		default: "William Sæther | Full-Stack Developer",
		template: "%s | William Sæther",
	},
	description: "MSc Computer Science student at NTNU and full-stack developer building web, mobile, machine learning, computer vision, and developer tool projects.",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "William Sæther | Full-Stack Developer",
		description: "Portfolio of William Sæther, an MSc Computer Science student at NTNU with full-stack, machine learning, computer vision, and product-focused project experience.",
		url: "https://william.bysaether.com",
		siteName: "William Sæther",
		images: [
			{
				url: "/images/portrait.webp",
				width: 1000,
				height: 1234,
				alt: "William Sæther",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "William Sæther | Full-Stack Developer",
		description: "MSc Computer Science student at NTNU building web, mobile, machine learning, and developer tool projects.",
		images: ["/images/portrait.webp"],
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="dark">
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
