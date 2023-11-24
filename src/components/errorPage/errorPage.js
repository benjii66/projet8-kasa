import { Link } from "react-router-dom";

export default function ErrorPage() {
	//display the Error Page Content, with an oops and a redirection to the home page
	return (
		<div className="errorContainer">
			<p className="errorNumber">404</p>
			<p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" aria-label = "Error Page" className="errorLinkHome">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}