import { Link } from 'react-router';
import './Home.css';

export default function Home() {
  return (
    <>
      <section className="section hero" id="home-page">
        <div className="hero-text">
          <h1>
            Welcome to <span>CineVerse</span>
          </h1>
          <p>Track your favorite movies, share your top picks and manage your personal movie collection.</p>
          <div className="hero-actions">
            <Link to="/catalog" className="btn btn-primary">
              Browse Movies
            </Link>
            <Link to="/create" className="btn btn-outline">
              Add New Movie
            </Link>
          </div>
          <p className="hero-hint">Login to create, edit and manage your own movies. Guests can only browse.</p>
        </div>
        <div className="hero-aside">
          <div className="hero-card">
            <h2>CineVerse Stats</h2>

            <div className="stats-grid">
              <div className="stat-box">
                <span>🎬 Movies</span>
                <strong>128</strong>
              </div>

              <div className="stat-box">
                <span>👤 Members</span>
                <strong>42</strong>
              </div>

              <div className="stat-box">
                <span>⭐ Rating</span>
                <strong>4.3</strong>
              </div>

              <div className="stat-box">
                <span>❤️ Favorites</span>
                <strong>89</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // TODO: BONUS */}
      {/* LatestMovies */}
    </>
  );
}
