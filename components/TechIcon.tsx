interface TechIconProps {
	name: string;
	color?: string;
	className?: string;
}

export default function TechIcon({ name, color, className }: TechIconProps) {
	if (name === "motion") return <img src="/images/icons/motion.svg" className={className ?? "size-4"} alt={name}></img>;
	if (name === "java") return <img src="/images/icons/java.svg" className={className ?? "size-4"} alt={name}></img>;
	if (name === "adobe") return <img src="/images/icons/adobe.svg" className={className ?? "size-4"} alt={name}></img>;
	return <img
		src={color ?
			"https://cdn.simpleicons.org/" + name + "/" + color :
			"https://cdn.simpleicons.org/" + name
		}
		className={className ?? "size-4"}
		alt={name}
	/>
}