import { Link } from 'react-router';

import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <section className={`section ${styles.hero}`} id="home-page">
        <div className={styles.heroText}>
          <h1>
            Welcome to <span>CineVerse</span>
          </h1>
          <p>Track your favorite movies, share your top picks and manage your personal movie collection.</p>
          <div className={styles.heroActions}>
            <Link to="/catalog" className="btn btn-primary">
              Browse Movies
            </Link>
            {/* // TODO : Authorization */}
            <Link to="/create" className="btn btn-outline">
              Add New Movie
            </Link>
          </div>
          <p className={styles.heroHint}>Login to create, edit and manage your own movies. Guests can only browse.</p>
        </div>
        <div className={styles.heroAside}>
          <div className={styles.heroCard}>
            <h2>CineVerse Stats</h2>

            {/* // TODO: change to dynamic data */}
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span>🎬 Movies</span>
                <strong>128</strong>
              </div>

              <div className={styles.statBox}>
                <span>👤 Members</span>
                <strong>42</strong>
              </div>

              <div className={styles.statBox}>
                <span>⭐ Rating</span>
                <strong>4.3</strong>
              </div>

              <div className={styles.statBox}>
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
