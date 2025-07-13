'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import {Card} from "@/components/Experience";

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
			className="h-[600px] border-1 rounded-xl flex items-center justify-center cursor-pointer group overflow-hidden"
			initial={{ scale: 0.9, opacity: 0 }}
			animate={animationInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}
		>
			<div
				className="w-full h-full px-16 flex justify-end items-end"
				style={{ background: "linear-gradient(to bottom, " + card.primaryColor + ", " + card.secondaryColor + ")" }}
			>
				<div className="translate-y-5 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-3">
					<Image
						src={card.image}
						alt="Picture inside of Obs BYGG"
						width={800}
						height={600}
						className="rounded-t-2xl border-1 border-white/20"
						style={{ boxShadow: "0 0 30px " + card.secondaryColor }}
					/>
				</div>
			</div>
		</motion.div>
	);
}
