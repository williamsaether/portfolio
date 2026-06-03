import { Award, GraduationCap, Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";

const icons = [Trophy, Award, GraduationCap];

export default function Achievements() {
	return (
		<section className="w-full max-w-6xl mx-auto my-20 px-8 lg:px-5">
			<div className="flex flex-col gap-3 items-center mb-14 text-center">
				<span className="text-xl font-normal tracking-widest opacity-70">ACHIEVEMENTS</span>
				<h2 className="text-4xl md:text-6xl font-semibold text-glow">Signals Beyond <span className="gradient-text">Projects</span></h2>
			</div>
			<div className="grid md:grid-cols-3 gap-4">
				{achievements.map((achievement, index) => {
					const Icon = icons[index] ?? Award;
					return (
						<article key={achievement.id} className="skills-card">
							<div className="flex items-center gap-3">
								<span className="p-3 rounded-xl bg-neutral-950 border-1 border-neutral-800">
									<Icon size={22} aria-hidden="true" />
								</span>
								<div>
									<p className="text-sm text-blue-300">{achievement.kicker}</p>
									<h3 className="text-xl font-bold">{achievement.title}</h3>
								</div>
							</div>
							<p className="text-neutral-300">{achievement.description}</p>
							<p className="text-sm font-semibold text-neutral-500">{achievement.meta}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
}
