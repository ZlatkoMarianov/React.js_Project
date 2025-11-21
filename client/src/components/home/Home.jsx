import './Home.css'

export default function Home() {
  return (
    <section className="section hero" id="home-page">
      <div className="hero-text">
        <h1>
          Welcome to <span>CineVerse</span>
        </h1>
        <p>Track your favourite movies, share your top picks and manage your personal movie collection.</p>
        <div className="hero-actions">
          <a href="/catalog" className="btn btn-primary">
            Browse Movies
          </a>
          <a href="/create" className="btn btn-outline">
            Add New Movie
          </a>
        </div>
        <p className="hero-hint">Login to create, edit and manage your own movies. Guests can only browse.</p>
      </div>
      <div className="hero-aside">
        <div className="hero-card">
          <h2>App Overview</h2>
          {/* <ul>
              <li>
                Total movies: <strong>128</strong>
              </li>
              <li>
                Registered users: <strong>42</strong>
              </li>
              <li>
                Average rating: <strong>4.3 ★</strong>
              </li>
              <li>
                Favourites feature: <strong>Enabled</strong>
              </li>
            </ul> */}
        </div>
      </div>
    </section>
  );
}
