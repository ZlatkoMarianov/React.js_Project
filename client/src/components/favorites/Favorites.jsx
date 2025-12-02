import MovieCard from '../movieCard/MovieCard.jsx';
import styles from './Favorites.module.css';

export default function Favorites() {
  return (
    <section className={`section ${styles.favoritesPage}`}>
      <div className={styles.sectionHeader}>
        <h2>My Favorites</h2>
        <p className="section-subtitle">Movies you've marked as favorites.</p>
      </div>
      <div className={`movie-grid ${styles.favoritesGrid}`}>

        {/* // TODO 
        <MovieCard /> */}

      </div>
    </section>
  );
}
