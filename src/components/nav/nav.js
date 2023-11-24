import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="nav-header">
			<Link to="/" aria-label="Home Page"className="nav-header_link-home">
				Accueil
			</Link>
			<Link to="/about" aria-label="About Page"className="nav-header_link-about">
				A Propos
			</Link>
		</nav>
	);
}