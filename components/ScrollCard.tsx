'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

type ProjectCardProps = {
	id: string;
	title: string;
	onInView: (id: string) => void;
};

export function ScrollCard({ id, title, onInView }: ProjectCardProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: false, margin: "-100px 0px"});

	const [hasTriggered, setHasTriggered] = useState(false);

	useEffect(() => {
		if (isInView && !hasTriggered) {
			onInView(id);
			setHasTriggered(true);
		}
		if (!isInView && hasTriggered) {
			setHasTriggered(false);
		}
	}, [isInView, hasTriggered, id, onInView]);

	return (
		<motion.div
			ref={ref}
			className="h-[600px] bg-neutral-700 rounded-xl flex items-center justify-center text-white text-xl font-bold cursor-pointer"
			initial={{ scale: 0.8, opacity: 0 }}
			animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
		>
			{title}
		</motion.div>
	);
}
