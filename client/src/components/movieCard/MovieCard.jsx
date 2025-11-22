import styles from './MovieCard.module.css';

export default function MovieCard() {
  return (
    <article className={styles.movieCard}>
      <div className={styles.movieImage}>
        <img
          src="https://i.ytimg.com/vi/VMobEB8voH8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsa_3mrNGYakRKZ1g-5zwT8VK95A"
          alt="Movie poster"
        />
        <span className={styles.movieBadge}>4.5 ★</span>

        <button className={`${styles.favToggle} ${styles.isFav}`} title="Remove from favourites">
          ❤️
        </button>
        {/* <button className={styles.favToggle} title="Add to favourites">♡</button> */}
      </div>
      <div className={styles.movieBody}>
        <h3 className={styles.movieTitle}>Inception</h3>
        <p className={styles.movieMeta}>2010 · Sci-Fi / Action</p>
        <p className={styles.movieDescription}>A thief who steals corporate secrets through the use of dream-sharing technology...</p>
      </div>
      <div className={styles.movieFooter}>
        <button className="btn btn-small btn-outline">Details</button>

        <div className={styles.movieOwnerActions}>
          <button className="btn btn-small btn-ghost">Edit</button>
          <button className="btn btn-small btn-danger">Delete</button>
        </div>
      </div>
    </article>
  );
}
