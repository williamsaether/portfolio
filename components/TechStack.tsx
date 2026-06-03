/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Boxes, Network, Sparkles, Wrench } from "lucide-react";

type TechStackProps = {
	name: string,
	icon: string,
	color?: string
}

type TechIconProps = {
	name: string;
	color?: string;
	className?: string;
}

function TechIcon({ name, color, className }: TechIconProps) {
	if (name === "sparkles") return <Sparkles className={className ?? "size-4"} color={color ?? "#facc15"} aria-label={name} />;
	if (name === "sensor-fusion") return <Network className={className ?? "size-4"} color={color ?? "#7dd3fc"} aria-label={name} />;
	if (name === "technical-project-management") return <Wrench className={className ?? "size-4"} color={color ?? "#c4b5fd"} aria-label={name} />;
	if (name === "product-development") return <Boxes className={className ?? "size-4"} color={color ?? "#86efac"} aria-label={name} />;
	if (["motion","java","adobe"].includes(name)) return <img src={"/images/icons/" + name + ".svg"} className={className ?? "size-4"} alt={name}></img>;
	return <img
		src={color ?
			"https://cdn.simpleicons.org/" + name + "/" + color :
			"https://cdn.simpleicons.org/" + name
		}
		className={className ?? "size-4"}
		alt={name}
	/>
}

export default function TechStack({name, icon, color}: TechStackProps) {
	return (
		<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800">
			<TechIcon name={icon} color={color ?? undefined}/>
			{name}
		</span>
	)
}
