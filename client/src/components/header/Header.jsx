import { Link } from 'react-router';
import './Header.css';

import NavItem from './NavItem.jsx';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <span className="logo-mark">🎥</span>
          <span className="logo-text">CineVerse</span>
        </div>
        <nav className="main-nav">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/catalog">Movies</NavItem>
          <NavItem to="/search">Search</NavItem>
          <NavItem to="/favorites">Favorites</NavItem>
          <NavItem to="/my-movies">My Movies</NavItem>
        </nav>
        <div className="auth-nav">
          <Link to="/login" className="btn btn-ghost">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            Register
          </Link>

          {/* <span className="user-email">user@mail.com</span>
          <button className="btn btn-ghost">Logout</button> */}
        </div>
      </div>
    </header>
  );
}
