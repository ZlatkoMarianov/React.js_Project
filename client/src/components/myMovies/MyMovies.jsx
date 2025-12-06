import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext.jsx';
import useMovieService from '../../hooks/useMovieService.js';
import MovieCard from '../movies/movieCard/MovieCard.jsx';
import styles from './MyMovies.module.css';

export default function MyMovies() {
  const { user } = useAuthContext();
  const { getByOwner } = useMovieService();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (user?._id) {
      getByOwner(user._id).then((result) => setMovies(result));
    }
  }, [user?._id]);

  console.log(movies);

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
