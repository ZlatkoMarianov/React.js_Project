import { Link } from 'react-router';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  return (
    <article className={styles.movieCard}>
      <div className={styles.movieImage}>
        <img src={movie.imageUrl} alt={movie.title} />
        <span className={styles.movieBadge}>{movie.rating} ★</span>

        {/* <button className={`${styles.favToggle} ${styles.isFav}`} title="Remove from favorites">
          ❤️
        </button> */}
        {/* <button className={styles.favToggle} title="Add to favorites">♡</button> */}
      </div>
      <div className={styles.movieBody}>
        <h3 className={styles.movieTitle}>{movie.title}</h3>
        <p className={styles.movieMeta}>{movie.genre}</p>
        <p className={styles.movieDescription}>{movie.description}</p>
      </div>
      <div className={styles.movieFooter}>
        {/* <button className="btn btn-small btn-outline">Details</button> */}
        <Link to={`/movies/${movie._id}/details`} className="btn btn-small btn-outline">Details</Link>

        {/* <div className={styles.movieOwnerActions}>
          <button className="btn btn-small btn-ghost">Edit</button>
          <button className="btn btn-small btn-danger">Delete</button>
        </div> */}
      </div>
    </article>
  );
}
