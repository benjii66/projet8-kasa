import emptyStar from "../../assets/emptyStar.svg";
import fullStar from "../../assets/star-rate.svg";

export default function Rate({ score }) {
	// it's for the stars rating, to call inside the ficheLogement file
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-area">
			{/* simply display the right number given by the ficheLogement */}
			{stars.map((ratingLevel) =>
				score >= ratingLevel ? (
					<img
						key={ratingLevel.toString()}
						className="star"
						src={fullStar}
						alt="rating star"
					/>
				) : ( 
					<img
						key={ratingLevel.toString()}
						className="star"
						src={emptyStar}
						alt="rating star"
						aria-label="rating star"
					/>
				)
			)}
		</div>
	);
}