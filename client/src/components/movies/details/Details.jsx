import { Link, useParams } from 'react-router-dom';
import styles from './Details.module.css';

export default function Details() {
  const { movieId } = useParams();
  
  return (
    <section className={`section ${styles.detailsPage}`}>
      <div className={styles.detailsLayout}>
        <div className={styles.detailsPoster}>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Inception_OST.jpg/250px-Inception_OST.jpg" alt="Movie poster" />
        </div>
        <div className={styles.detailsContent}>
          <h2>Inception</h2>
          <p className={styles.detailsMeta}>2010 · 148 min · Sci-Fi / Action</p>
          <p className={styles.detailsRating}>
            Rating: <strong> 4.5 / 5</strong> ★
          </p>
          <p className={styles.detailsDescription}>
            Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction: stealing valuable secrets from deep within the
            subconscious during the dream state...
          </p>
          <div className={styles.detailsActions}>
            <Link to="/catalog" className="btn btn-outline">
              Back to catalog
            </Link>
            {/*  – Add/Remove favorites */}
            <button className="btn btn-primary">Add to favorites</button>

            <Link to={`/movies/${movieId}/edit`} className="btn btn-ghost">Edit</Link>
            {/* <button className="btn btn-ghost">Edit</button> */}
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
}
