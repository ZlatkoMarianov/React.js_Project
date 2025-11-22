import MovieCard from '../movieCard/MovieCard.jsx';
import styles from './MoviesCatalog.module.css';

export default function MoviesCatalog() {
  return (
    <section className={`section ${styles.catalogPage}`}>
      <div className={styles.sectionHeader}>
        <h2>Movies Catalog</h2>
        <div className={styles.sectionActions}>
          <input type="text" className={`input ${styles.searchInput}`} placeholder="Search by title (local filter)..." />
          <select className={`input ${styles.genreSelect}`}>
            <option value="">All genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Comedy</option>
            <option>Thriller</option>
          </select>
        </div>
      </div>
      <div className="movie-grid">
        {/* MOVIE CARD */}
        <MovieCard />
        <MovieCard />
        <MovieCard />
        {/* <MovieCard />
        <MovieCard />
        <MovieCard /> */}
      </div>
    </section>
  );
}
