'use client'

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import TechStack from "@/components/TechStack";
import OtherStack from "@/components/OtherStack";
import {Handshake, SquareCheckBig} from "lucide-react";

type CardProps = {
	id: string;
	primaryColor: string;
	secondaryColor: string;
	textColor: string;
	image: string;
	company: string;
	link?: {name: string, url: string};
	role: string;
	text: string;
	description: string;
	stack: React.JSX.Element[];
}

type Card = {
	card: CardProps;
}

const cards: CardProps[] = [
	{
		id: "vizrt",
		primaryColor: "#e85725",
		secondaryColor: "#f58557",
		textColor: "#ffdbcf",
		image: "/images/pictures/vizrt.webp",
		company: "Vizrt",
		link: {name: "Bachelor's thesis (in Norwegian)", url: "https://hdl.handle.net/11250/3201308"},
		role: "Software Developer (Bachelor Project)",
		text: "Centralized App Launcher for Vizrt's Web Apps",
		description: "Worked on an app launcher for Vizrt's web platform. Developed Vue and Node.js components, " +
			"collaborated in an agile team, and learned enterprise-level software practices.",
		stack: [
			<TechStack key="vue.js" name="Vue.js" icon="vuedotjs"/>,
			<TechStack key="typescript" name="TypeScript" icon="typescript"/>,
			<TechStack key="docker" name="Docker" icon="docker"/>,
			<TechStack key="git" name="Git" icon="git"/>,
			<TechStack key="express" name="Express" icon="express" color="white"/>,
			<TechStack key="node.js" name="Node.js" icon="nodedotjs"/>,
			<TechStack key="postgres" name="PostgreSQL" icon="postgresql"/>,
			<TechStack key="figma" name="Figma" icon="figma"/>,
		]
	},
	{
		id: "obsbygg",
		primaryColor: "#003975",
		secondaryColor: "#387bbd",
		textColor: "#a4d2ff",
		image: "/images/pictures/obs-bygg.svg",
		company: "Obs BYGG",
		role: "Retail Employee",
		text: "",
		description: "Assisted customers with products and services, learned valuable communication and " +
			"problem-solving skills, and gained experience in customer support.",
		stack: [
			<OtherStack key="comm" name="Communication" icon={<Handshake size={16} color="yellow" />} />,
			<OtherStack key="prob" name="Problem-solving" icon={<SquareCheckBig size={16} color="lightgreen" />} />,
		]
	},
]

export default function Experience() {

	function Card({card}: Card) {
		return (
			<motion.div whileHover={{ scale: 1.005 }} className="card-wrapper rounded-2xl">
				<div className="card-border"/>
				<div className="card-content grid gap-2 p-5">
					<h3 className="text-3xl font-bold">{card.company}</h3>
					<p className="text-sm text-neutral-400">{card.role}</p>
					<a href={card.link?.url} target="_blank" rel="noreferrer" className="text-sm text-neutral-500 underline">{card.link?.name}</a>
					<p>{card.description}</p>
					<Image
						className="max-h-[20rem] h-full w-auto mx-auto rounded-xl"
						src={card.image}
						width={500}
						height={667}
						quality={100}
						priority
						alt={card.company}
					/>
					<div className="flex flex-wrap gap-1.5">
						{card.stack}
					</div>
				</div>
			</motion.div>
		)
	}

	return (
		<div className="grid lg:grid-cols-2 gap-4 w-full max-w-5xl mx-auto px-10 lg:px-5">
			<div className="flex flex-col gap-3 items-center col-start-1 lg:col-end-3 mb-20 text-center">
				<span className="text-xl font-normal tracking-widest opacity-70">EXPERIENCE</span>
				<span className="text-6xl font-semibold text-glow">What I've <span className="gradient-text">Done For Work</span></span>
			</div>
			<div className="flex flex-col gap-4">
				{cards.filter((card) => ["vizrt"].includes(card.id)).map((card) => (
					<Card key={card.id} card={card} />
				))}
			</div>
			<div className="flex flex-col gap-4">
				{cards.filter((card) => ["obsbygg"].includes(card.id)).map((card) => (
					<Card key={card.id} card={card} />
				))}
			</div>
		</div>
	);
}
