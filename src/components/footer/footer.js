import logo from "../../assets/logo-footer.svg";

export default function Footer() {
	//simply display the footer content with the logo and
	return (
		<footer className="foot-container">
			<img src={logo} aria-label="Kasa Logo" alt="logo de kasa" />
			<p className="foot-container__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}