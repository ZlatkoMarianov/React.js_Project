import { Link } from 'react-router';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <section className={`section ${styles.notfoundContainer}`} id="not-found-page">
      <div className={styles.notfoundBox}>
        <img src="../../../public/images/notFound.png" alt="Broken Film" className={styles.notfoundImage} />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you're looking for doesn't exist. It may have been moved or deleted.</p>
        <Link to="/" className={styles.btnBack}>
          ⬅ Back to Home
        </Link>
      </div>
    </section>
  );
}
