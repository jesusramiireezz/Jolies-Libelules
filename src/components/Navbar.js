import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Jolies Libelules" />
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
        <li><Link to="/donde-encontrarnos" onClick={closeMenu}>Dónde encontrarnos</Link></li>
        <li><Link to="/reservar" onClick={closeMenu}>Reservar</Link></li>
        <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
