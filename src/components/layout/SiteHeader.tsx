import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigation, site } from '../../content/site';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" to="/" aria-label="PGCET Student Community home" onClick={() => setMenuOpen(false)}>
          <span className="wordmark-mark" aria-hidden="true">P.</span>
          <span className="wordmark-copy">
            <span className="wordmark-name">{site.shortName}</span>
            <span className="wordmark-caption">STUDENT COMMUNITY</span>
          </span>
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav id="primary-navigation" className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="button button-small button-primary nav-join" to="/community" onClick={() => setMenuOpen(false)}>
            Join the community <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}