import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav-header">
      <NavLink to="/" aria-label="Home Page" className="nav-header_link-home" activeClassName="active">
        Accueil
      </NavLink>
      <NavLink to="/about" aria-label="About Page" className="nav-header_link-about" activeClassName="active">
        A Propos
      </NavLink>
    </nav>
  );
}