import { ShieldAlert } from "lucide-react";
import { securityResearch } from "@/data/securityResearch";

export default function SecurityResearchSection() {
	return (
		<section className="w-full max-w-6xl mx-auto my-20 px-8 lg:px-5">
			<div className="flex flex-col gap-3 items-center mb-14 text-center">
				<span className="text-xl font-normal tracking-widest opacity-70">SECURITY RESEARCH</span>
				<h2 className="text-4xl md:text-6xl font-semibold text-glow">Responsible <span className="gradient-text">Disclosure</span></h2>
			</div>
			<div className="grid gap-4">
				{securityResearch.map((item) => (
					<article key={item.id} className="skills-card">
						<div className="flex items-center gap-3">
							<span className="p-3 rounded-xl bg-neutral-950 border-1 border-neutral-800">
								<ShieldAlert size={22} aria-hidden="true" />
							</span>
							<div>
								<p className="text-sm text-amber-300">{item.status}</p>
								<h3 className="text-xl font-bold">{item.title}</h3>
							</div>
						</div>
						<p className="text-neutral-300">{item.description}</p>
						<p className="text-sm font-semibold text-neutral-500">{item.notes}</p>
					</article>
				))}
			</div>
		</section>
	);
}
