import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <span className="logo-mark">🎥</span>
          <span className="logo-text">CineVerse</span>
        </div>
        <nav className="main-nav">
          <a href="#home-page" className="nav-link is-active">
            Home
          </a>
          <a href="#catalog-page" className="nav-link">
            Movies
          </a>
          <a href="#search-page" className="nav-link">
            Search
          </a>
          <a href="#favorites-page" className="nav-link">
            Favorites
          </a>
          <a href="#my-movies-page" className="nav-link">
            My Movies
          </a>
        </nav>
        <div className="auth-nav">
          <a href="#login-page" className="btn btn-ghost">
            Login
          </a>
          <a href="#register-page" className="btn btn-primary">
            Register
          </a>

          {/* <span className="user-email">user@mail.com</span>
          <button className="btn btn-ghost">Logout</button> */}
        </div>
      </div>
    </header>
  );
}
