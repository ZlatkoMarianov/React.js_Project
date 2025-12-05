import { useEffect, useState } from 'react';
import MovieCard from '../movieCard/MovieCard.jsx';
import styles from './MoviesCatalog.module.css';

export default function MoviesCatalog() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/data/movies')
      .then((response) => response.json())
      .then((result) => {
        setMovies(result);
      });
  }, []);

  return (
    <section className={`section ${styles.catalogPage}`}>
      <div className={styles.sectionHeader}>
        <h2>Movies Catalog</h2>

        {/* // TODO BONUS */}
        {/* <div className={styles.sectionActions}>
          <input type="text" className={`input ${styles.searchInput}`} placeholder="Search by title (local filter)..." />
          <select className={`input ${styles.genreSelect}`}>
            <option value="">All genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Comedy</option>
            <option>Thriller</option>
          </select>
        </div> */}
      </div>
      <div className="movie-grid">
        {movies.length === 0 && (
          <p className={styles.emptyMessage}>No movies added yet!</p>
        )}
        {movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
