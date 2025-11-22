import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import NavItem from './NavItem.jsx';

export default function Header() {
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
          <NavItem to="/favorites">Favorites</NavItem>
          <NavItem to="/my-movies">My Movies</NavItem>
        </nav>

        <div className={styles.authNav}>
                    {/* // TODO:  */}
          <Link to="/login" className="btn btn-ghost">
            Login
          </Link>
          <Link to="/register" className="btn btn-ghost">
            Register
          </Link>

          {/* <span className={styles.userEmail}>user@mail.com</span>
          <button className="btn btn-ghost">Logout</button> */}
        </div>
      </div>
    </header>
  );
}
