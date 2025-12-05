import { useEffect, useState } from 'react';
import MovieCard from '../movieCard/MovieCard.jsx';
import styles from './MoviesCatalog.module.css';
import useMovieService from '../../../hooks/useMovieService.js';

export default function MoviesCatalog() {
  const [movies, setMovies] = useState([]);
  const { getAll } = useMovieService();

  useEffect(() => {
    getAll().then((result) => setMovies(result));
  }, [getAll]);

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
        {movies.length === 0 && <p className={styles.emptyMessage}>No movies added yet!</p>}
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
