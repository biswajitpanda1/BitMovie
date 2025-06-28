import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Bit Movie
      </Link>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
