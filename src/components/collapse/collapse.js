import { useState, useRef, useEffect } from "react"; 
import Chevron from "../../assets/vectorBas.svg";

export default function Collapse(props) {

	//here's the collapsing part of the differents home when you click it'll display or not like an accordion 

	const {aboutStyle, aboutTitle, aboutText} = props;
	const [toggle, setToggle] = useState(false); 
	const [heightElement, setHeightElement] = useState(); //toggle state by the element

	const toggleState = () => {
		//toggleState setted by the click
		setToggle(!toggle);
	};

	const refHeight = useRef(); 

	useEffect(() => {
		setHeightElement(refHeight.current.scrollHeight);
	}, []);

	return (
		//display the collapse or roll it back, depend of the click 
		<div className={`collapse ${aboutStyle}`}>
			<div onClick={toggleState} className="collapse__visible">
				<h2>{aboutTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
					aria-label="Carrousel chevron"
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"} //do you know how happy I am with ternaries ?
				style={{ height: toggle ? heightElement+"px" : "0px" }}
			>
				 <p aria-hidden={toggle ? "true" : "false"}>{aboutText}</p>  {/*display the content when it's activated  */}
			</div>
		</div>
	);

}

