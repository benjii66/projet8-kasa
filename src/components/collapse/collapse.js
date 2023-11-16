import { useState, useRef, useEffect } from "react"; 
import Chevron from "../../assets/vectorBas.svg";

export default function Collapse(props) {
	const [toggle, setToggle] = useState(false); 
	const [heightElement, setHeightElement] = useState(); //toggle state by the element

	const toggleState = () => {
		//toggleState setted by the click
		setToggle(!toggle);
	};

	const refHeight = useRef(); 

	useEffect(() => {
		setHeightElement(`${refHeight.current.scrollHeight}px`);
	}, []);

	return (
		//display the collapse or roll it back, depend of the click 
		<div className={`collapse ${props.aboutStyle}`}>
			<div onClick={toggleState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"} //do you know how happy I am with ternaries ?
				style={{ height: toggle ? `${heightElement}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}