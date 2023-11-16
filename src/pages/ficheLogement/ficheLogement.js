import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/carrousel/carrousel";
import Collapse from "../../components/collapse/collapse";
import Host from "../../components/host/host";
import Rate from "../../components/rate/rate";
import Tag from "../../components/tag/tag";
import axios from "axios";

export default function FicheLogement() {
	const params = useParams();
	const navigate = useNavigate();

	const [chosenAppart, setchosenAppart] = useState();
	useEffect(() => {
		const getData = async () => {
			const res = await axios.get("/logements.json");
			const picked = res.data.find(({ id }) => id === params.id);
			res.data.map(() => setchosenAppart(picked));
			if (picked === undefined) navigate("/404", { state: { message: "Can't get data" } }); 
			
		};
		getData();
		
	}, []); 
	const slidePics = chosenAppart && chosenAppart.pictures;
	const tags = chosenAppart && chosenAppart.tags;
	const equipments = chosenAppart && chosenAppart.equipments;
	const equip =
		chosenAppart &&
		equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));
	return (
		chosenAppart && (
			<div key={params.id} className="fiche-container">
				<Carrousel slides={slidePics} />
				<section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="title-container redFont">
							<h1>{chosenAppart.title}</h1>
							<h3>{chosenAppart.location}</h3>
						</div>
						<div className="tags-container">
							{tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
					</div>
					<div className="rate-host-container">
						<div className="host-container redFont">
							<Host
								hostName={chosenAppart.host.name}
								hostPic={chosenAppart.host.picture}
							/>
						</div>
						<div className="rate-container">
							<Rate score={chosenAppart.rating} />
						</div>
					</div>
				</section>
				<div className="collapse-fiche-container">
					<Collapse
						aboutTitle="Description"
						aboutText={chosenAppart.description}
					/>
					<Collapse aboutTitle="Équipements" aboutText={equip} />
				</div>
			</div>
		)
	);
}