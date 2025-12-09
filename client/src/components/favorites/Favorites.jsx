import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext.jsx';
import useFavoriteService from '../../hooks/useFavoriteService.js';
import useMovieService from '../../hooks/useMovieService.js';
import MovieCard from '../movies/movieCard/MovieCard.jsx';
import styles from './Favorites.module.css';
import Spinner from '../common/Spinner.jsx';

export default function Favorites() {
  const { user } = useAuthContext();
  const { getUserFavorites } = useFavoriteService();
  const { getOne } = useMovieService();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?._id) {
      setLoading(true);
      getUserFavorites(user._id)
        .then(async (favorites) => {
          const moviePromises = favorites.map((fav) => getOne(fav.movieId));
          const moviesData = await Promise.all(moviePromises);
          setMovies(moviesData);
        })
        .finally(() => setLoading(false));
    }
  }, [user?._id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className={`section ${styles.favoritesPage}`}>
      <div className={styles.sectionHeader}>
        <h2>My Favorites</h2>
        <p className="section-subtitle">Movies you've marked as favorites.</p>
      </div>
      <div className={`movie-grid ${styles.favoritesGrid}`}>
        {movies.length === 0 && (
          <div className={styles.emptyMessage}>
            <p>You haven't added any favorites yet!</p>
          </div>
        )}
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
