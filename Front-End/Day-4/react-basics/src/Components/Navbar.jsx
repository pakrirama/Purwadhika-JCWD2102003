import ".././style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark">
      <ul className="nav">
        <li className="nav-item btn-secondary">
          <a href="#home" className="nav-link text-white">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link text-white">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#members" className="nav-link text-white">
            Members
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link text-white">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
