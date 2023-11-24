import { useEffect, useState } from "react";
import Banner from "../../components/banner/banner";
import Card from "../../components/cards/card";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("/logements.json").then((res) => setData(res.data)); //of course we start so implement the possibility to have the backend ready too
	}, []);

	return (
		<>
		{/* display all the logements with the data.map 
			the <> </> is a fragment it put the DOM content under their parent (here a div), it avoid HTML DOM issues
		*/}
			<Banner />
			<div className="cards-container">
				{data.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link aria-label="Logement Page" className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}