import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext.jsx';
import useMovieService from '../../hooks/useMovieService.js';
import MovieCard from '../movies/movieCard/MovieCard.jsx';
import styles from './MyMovies.module.css';
import Spinner from '../common/Spinner.jsx';

export default function MyMovies() {
  const { user } = useAuthContext();
  const { getByOwner } = useMovieService();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?._id) {
      setLoading(true);
      getByOwner(user._id)
        .then((result) => setMovies(result))
        .finally(() => setLoading(false));
    }
  }, [user?._id]);

  if (loading) {
  return <Spinner />;
}

  return (
    <section className={`section ${styles.myMoviesPage}`}>
      <div className={styles.sectionHeader}>
        <h2>My Movies</h2>
        {/* // TODO : to change section-subtitle */}
        <p className="section-subtitle">Movies you have created.</p>
      </div>
      <div className={`movie-grid ${styles.myMoviesGrid}`}>
        {movies.length === 0 && (
          <div className={styles.noMovies}>
            <p>You haven't created any movies yet!</p>
          </div>
        )}
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
