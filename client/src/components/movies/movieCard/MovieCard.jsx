import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
import FavoriteButton from '../../favorites/favoriteButton/FavoriteButton.jsx';

export default function MovieCard({ movie }) {
  return (
    <article className={styles.movieCard}>
      <div className={styles.movieImage}>
        <img src={movie.imageUrl} alt={movie.title} />
        <span className={styles.movieBadge}>{movie.rating} ★</span>

         <div className={styles.favoriteContainer}>
          <FavoriteButton movieId={movie._id} />
        </div>
      </div>
      <div className={styles.movieBody}>
        <h3 className={styles.movieTitle}>{movie.title}</h3>
        <p className={styles.movieMeta}>{movie.genre}</p>
        <p className={styles.movieDescription}>{movie.description}</p>
      </div>
      <div className={styles.movieFooter}>
        <Link to={`/movies/${movie._id}/details`} className="btn btn-outline">
          Details
        </Link>
      </div>
    </article>
  );
}
