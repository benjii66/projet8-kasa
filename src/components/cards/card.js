export default function Card({ cover, title }) { 
	//display a logement card with all his informations
	return (
		<article className="card-logement">
			<img src={cover} alt="location" aria-label='logement' />
			<div className="card-logement__layer">
				<p className="card-logement__title">{title}</p>
			</div>
		</article>
	);
}