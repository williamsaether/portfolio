'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import {Card} from "@/components/Projects";

type CardProps = {
	card: Card;
	onInView: (id: string) => void;
};

export function ScrollCard({ card, onInView }: CardProps) {
	const ref = useRef<HTMLDivElement | null>(null);

	const animationInView = useInView(ref, { once: false, amount: 0.15 });
	const triggerInView = useInView(ref, { once: false, amount: 0.7 });

	const prevInView = useRef(false);

	useEffect(() => {
		if (triggerInView && !prevInView.current) {
			onInView(card.id);
		}
		prevInView.current = triggerInView;
	}, [triggerInView, card.id, onInView]);

	return (
		<motion.div
			ref={ref}
			className="h-[550px] relative rounded-3xl cursor-pointer group p-2 bg-neutral-800 border-1 border-neutral-700"
			initial={{ scale: 0.9, opacity: 0 }}
			animate={animationInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}
		>
			<div className="absolute top-0 left-4 right-4 h-[1px] bg-linear-90 from-transparent via-white to-transparent" />
			<div className="absolute top-2 left-4 right-4 h-[1px] bg-linear-90 from-transparent via-[#ffffffbf] to-transparent" />
			<div
				className="w-full h-full px-16 flex flex-col justify-between overflow-hidden rounded-2xl"
				style={{
					backgroundColor: "white",
					backgroundImage: "linear-gradient(190deg, " + card.primaryColor + " 20%, " + card.secondaryColor + " 60%, " + card.secondaryColor + "40 100%)"
				}}
			>
				<p className="text-2xl mt-12" style={{ color: card.textColor }}>{card.text}</p>
				<div className="translate-y-5 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-3">
					<Image
						src={card.image}
						alt={card.link}
						width={800}
						height={600}
						className="rounded-t-2xl border-1 border-white/20 aspect-3/2 object-cover"
						style={{ boxShadow: "0 0 15px " + card.secondaryColor }}
					/>
				</div>
			</div>
		</motion.div>
	);
}
