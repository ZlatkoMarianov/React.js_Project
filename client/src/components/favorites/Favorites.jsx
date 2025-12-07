import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext.jsx';
import useFavoriteService from '../../hooks/useFavoriteService.js';
import useMovieService from '../../hooks/useMovieService.js';
import MovieCard from '../movies/movieCard/MovieCard.jsx';
import styles from './Favorites.module.css';

export default function Favorites() {
  const { user } = useAuthContext();
  const { getUserFavorites } = useFavoriteService();
  const { getOne } = useMovieService();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (user?._id) {
      getUserFavorites(user._id)
        .then(async (favorites) => {
          const moviePromises = favorites.map((fav) => getOne(fav.movieId));
          const moviesData = await Promise.all(moviePromises);
          setMovies(moviesData);
        })
        .catch((err) => alert(err.message));
    }
  }, [user?._id]);

  return (
    <section className={`section ${styles.favoritesPage}`}>
      <div className={styles.sectionHeader}>
        <h2>My Favorites</h2>
        <p className="section-subtitle">Movies you've marked as favorites.</p>
      </div>
      <div className={`movie-grid ${styles.favoritesGrid}`}>
        {movies.length === 0 && <p className={styles.emptyMessage}>You haven't added any favorites yet!</p>}
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
