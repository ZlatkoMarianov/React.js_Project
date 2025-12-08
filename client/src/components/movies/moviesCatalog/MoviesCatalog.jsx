import { useEffect, useState } from 'react';
import MovieCard from '../movieCard/MovieCard.jsx';
import styles from './MoviesCatalog.module.css';
import useMovieService from '../../../hooks/useMovieService.js';
import Spinner from '../../common/Spinner.jsx';

export default function MoviesCatalog() {
  const [movies, setMovies] = useState([]);
  const [Loading, setLoading] = useState(true);
  const { getAll } = useMovieService();

  useEffect(() => {
    setLoading(true);
    getAll()
      .then((result) => setMovies(result))
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (Loading) {
    return <Spinner />;
  }

  return (
    <section className={`section ${styles.catalogPage}`}>
      <div className={styles.sectionHeader}>
        <h2>Movies Catalog</h2>
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
