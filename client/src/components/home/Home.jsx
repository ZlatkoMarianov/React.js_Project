import { Link } from 'react-router';
import styles from './Home.module.css';

import { useEffect, useState } from 'react';
import useMovieService from '../../hooks/useMovieService.js';
import MovieCard from '../movies/movieCard/MovieCard.jsx';
import useFavoriteService from '../../hooks/useFavoriteService.js';

export default function Home() {
  const [latestMovies, setLatestMovies] = useState([]);
  const [movieCount, setMovieCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  const { getLatest, getCount, getAll } = useMovieService();
  const { getFavoriteCount } = useFavoriteService();

  useEffect(() => {
    getLatest().then((result) => setLatestMovies(result));
    getCount().then((count) => setMovieCount(count));
    getFavoriteCount().then((count) => setFavoritesCount(count));

    getAll().then((movies) => {
      if (movies.length) {
        const sum = movies.reduce((acc, m) => acc + Number(m.rating), 0);
        const avg = (sum / movies.length).toFixed(1);
        setAvgRating(avg);
      }
    });
  }, []);

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
            <Link to="/create" className="btn btn-outline">
              Add New Movie
            </Link>
          </div>
          <p className={styles.heroHint}>Login to create, edit and manage your own movies. Guests can only browse.</p>
        </div>
        <div className={styles.heroAside}>
          <div className={styles.heroCard}>
            <h2>CineVerse Stats</h2>

            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span>🎬 Movies</span>
                <strong>{movieCount}</strong>
              </div>

              <div className={styles.statBox}>
                <span>⭐ Rating</span>
                <strong>{avgRating}</strong>
              </div>

              <div className={styles.statBox}>
                <span>❤️ Favorites</span>
                <strong>{favoritesCount}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h2>Latest Movies</h2>
        <div className="movie-grid">
          {latestMovies.length === 0 && (
            <div className={styles.emptyMessage}>
              <p>No movies added yet!</p>
            </div>
          )}
          {latestMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
}
