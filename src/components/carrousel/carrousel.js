import { useState } from "react";
import left from "../../assets/vector-left.svg";
import right from "../../assets/vector-right.svg";

export default function Carrousel({ slides }) {
	const [currentSlide, setCurrent] = useState(0); 
	const length = slides.length; 

	const nextSlide = () => {
		setCurrent(currentSlide === length - 1 ? 0 : currentSlide + 1); 
	};
	const prevSlide = () => {
		setCurrent(currentSlide === 0 ? length - 1 : currentSlide - 1); 
	};

	return (
		<section id="carrousel-container">
			{length > 1 && (
				<img
					src={left} 
					alt="gauche"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt="droite"
					onClick={nextSlide}
					className="rightArrow"
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
					{index === currentSlide && <img src={slide} alt="appartement à louer" />}
					{index === currentSlide && (
						<span className="slider__number">
							{currentSlide + 1}/{length}
						</span>
					)}
				</div>
			))}
		</section>
	);
}