import "../../../style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark">
      <ul className="nav">
        <li className="nav-item btn-secondary">
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link text-white">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link text-white">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
