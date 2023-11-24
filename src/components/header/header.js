import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.svg";
import Nav from "../nav/nav";

export default function Header() {
	//it's all about the Kasa's Header content with his logo and nav content 😉 
	return (
		<header className="headerWrap">
			<figure className="headerWrap__fig">
				<Link to="/" aria-label="Kasa Logo">
				<img className="logo" src={logo} alt="logo de l'agence kasa" aria-label="Kasa's logo" />
				</Link>
			</figure>
			<Nav className="nav-header" />
		</header>
	);
}