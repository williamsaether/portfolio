import React, {JSX} from "react";

type OtherStackProps = {
	name: string,
	icon: JSX.Element
}

export default function OtherStack({name, icon}: OtherStackProps) {
	return (
		<span className="inline-flex gap-2 items-center justify-center h-min text-sm px-2 py-1 rounded-lg bg-neutral-900 border-1 border-neutral-800">
			{icon}
			{name}
		</span>
	)
}