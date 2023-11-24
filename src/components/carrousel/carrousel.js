import { useState } from "react";
import left from "../../assets/vector-left.svg";
import right from "../../assets/vector-right.svg";

export default function Carrousel({ slides }) {
	//the carrousel part of each homes, it displays 6 pictures

	const [currentSlide, setCurrent] = useState(0); //set the state of the carroussel
	const length = slides.length; 

	const nextSlide = () => {
		setCurrent(currentSlide === length - 1 ? 0 : currentSlide + 1); 
	};
	const prevSlide = () => {
		setCurrent(currentSlide === 0 ? length - 1 : currentSlide - 1); 
	};

	return (
		<section id="carrousel-container">
			{/* if statement if there's pictures */}
			{length > 1 && (
				<img
					src={left} 
					alt="gauche"
					onClick={prevSlide}
					className="leftArrow"
					aria-label="left arrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt="droite"
					onClick={nextSlide}
					className="rightArrow"
					aria-label="right arrow"

				/>
			)}
			{slides.map((slide, index) => (
				<div
					key={index} 
					className={
						currentSlide === index
							? "slider black-mask white-mask active-anim"
							: "slider black-mask white-mask"
					}
				>					
					{index === currentSlide && (
						<>
						<img src={slide} alt="appartement à louer" aria-label={slide}/>
						<span className="slider__number">
							{currentSlide + 1}/{length}
						</span>
						</>
					)}
				</div>
			))}
		</section>
	);
}