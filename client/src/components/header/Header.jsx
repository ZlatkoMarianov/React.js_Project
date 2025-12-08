import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

import NavItem from './NavItem.jsx';
import { useAuthContext } from '../../contexts/AuthContext.jsx';

export default function Header() {
  const { isAuthenticated, isGuest, email } = useAuthContext();

  return (
    <header className={styles.siteHeader}>
      <div className={`container ${styles.headerInner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>🎥</span>
          <span className={styles.logoText}>CineVerse</span>
        </Link>
        <nav className={styles.mainNav}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/catalog">Movies</NavItem>
          <NavItem to="/search">Search</NavItem>
          {isAuthenticated && (
            <>
              <NavItem to="/favorites">Favorites</NavItem>
              <NavItem to="/myMovies">My Movies</NavItem>
            </>
          )}
        </nav>

        <div className={styles.authNav}>
          {isGuest && (
            <>
              <NavLink to="/login" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.isActive : ''}`}>
                Login
              </NavLink>
              <NavLink to="/register" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.isActive : ''}`}>
                Register
              </NavLink>
            </>
          )}

          {isAuthenticated && (
            <>
              <span className={styles.userEmail}>{email}</span>
              <Link to="/logout" className="btn btn-ghost">
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
