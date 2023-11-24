import AboutBanner from "../../components/aboutBanner/aboutBanner";
import Collapse from "../../components/collapse/collapse";
import aboutArray from "../../datas/aboutArray.json"; 

export default function About() {
	return (
		<>

		{/* display all the Kasa's about content, from a JSON array in 'datas' folder */}
			<AboutBanner />
			{aboutArray.map((aboutRule, id) => (
				<Collapse
					key={id}
					aboutTitle={aboutRule.aboutTitle}
					aboutText={aboutRule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}