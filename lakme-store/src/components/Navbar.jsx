import './Navbar.css';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Collection', href: '#collection' },
  { label: 'Products',   href: '#products'   },
  { label: 'About',      href: '#about'       },
  { label: 'Contact',    href: '#contact'     },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [cartCount,    setCartCount]    = useState(0);
  const [activeSearch, setActiveSearch] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">

        {/* Left links */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {navLinks.slice(0, 2).map(link => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Logo */}
        <a href="#" className="navbar__logo" aria-label="LAKME home">
          <span className="navbar__logo-text">LAKME</span>
          <span className="navbar__logo-tagline">Luxury Fashion</span>
        </a>

        {/* Right links + icons */}
        <div className="navbar__right">
          <nav className="navbar__links" aria-label="Secondary navigation">
            {navLinks.slice(2).map(link => (
              <a key={link.label} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar__icons">
            <button
              id="nav-search-btn"
              className={`navbar__icon-btn ${activeSearch ? 'active' : ''}`}
              aria-label="Search"
              onClick={() => setActiveSearch(v => !v)}
            >
              <SearchIcon />
            </button>
            <button
              id="nav-cart-btn"
              className="navbar__icon-btn"
              aria-label={`Cart – ${cartCount} items`}
              onClick={() => setCartCount(c => c + 1)}
            >
              <CartIcon />
              {cartCount > 0 && (
                <span className="navbar__cart-badge">{cartCount}</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          id="nav-menu-btn"
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Search bar */}
      <div className={`navbar__search-bar ${activeSearch ? 'navbar__search-bar--open' : ''}`}>
        <div className="container">
          <input
            id="nav-search-input"
            type="text"
            placeholder="Search for styles, collections…"
            className="navbar__search-input"
            autoFocus={activeSearch}
          />
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}
