import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/navigation';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__brand">
          <div className="navbar__logo">E</div>
          <div className="navbar__title">
            <span className="navbar__name">
              Energy Cup <span className="navbar__accent">'27</span>
            </span>
            <span className="navbar__sub">SPORTS PDEU · GANDHINAGAR</span>
          </div>
        </Link>

        <div className="navbar__links">
          {navLinks.map(link => (
            link.to
              ? <Link key={link.label} to={link.to}>{link.label}</Link>
              : <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className="navbar__actions">
          <Link to="/register" className="navbar__cta">Register</Link>
          <button
            className="navbar__burger"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            link.to
              ? <Link key={link.label} to={link.to} className="mobile-menu__link" onClick={closeMenu}>{link.label}</Link>
              : <a key={link.href} href={link.href} className="mobile-menu__link" onClick={closeMenu}>{link.label}</a>
          ))}
          <Link to="/register" className="mobile-menu__cta" onClick={closeMenu}>
            Register →
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
