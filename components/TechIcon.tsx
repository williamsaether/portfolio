interface TechIconProps {
	name: string;
	color?: string;
	className?: string;
}

export default function TechIcon({ name, color, className }: TechIconProps) {
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