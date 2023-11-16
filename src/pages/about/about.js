import AboutBanner from "../../components/aboutBanner/aboutBanner";
import Collapse from "../../components/collapse/collapse";
import aboutArray from "../../datas/aboutArray.json"; 

export default function About() {
	return (
		<>
			<AboutBanner />
			{aboutArray.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}