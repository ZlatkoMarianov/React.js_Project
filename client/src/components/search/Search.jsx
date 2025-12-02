import styles from './Search.module.css'

export default function Search() {
  return (
    <section className={`section ${styles.searchPage}`}>
      <div className={styles.searchHeader}>
        <h2>Search Movies</h2>
        <p className="section-subtitle">Search movies by title, genre or year.</p>
      </div>
      <form className={styles.searchForm}>
        <div className={styles.formGrid}>
          <label className={styles.formField}>
            <span>Title contains</span>
            <input type="text" className="input" placeholder="e.g. Matrix" />
          </label>
          <label className={styles.formField}>
            <span>Genre</span>
            <input type="text" className="input" placeholder="Action, Sci-Fi, Drama..." />
          </label>
          <label className={styles.formField}>
            <span>Year (from)</span>
            <input type="number" className="input" placeholder={1990} />
          </label>
          <label className={styles.formField}>
            <span>Year (to)</span>
            <input type="number" className="input" placeholder={2025} />
          </label>
        </div>
        <div className={styles.formActions}>
          <button className="btn btn-primary" type="submit">
            Search
          </button>
          <button className="btn btn-outline" type="button">
            Clear
          </button>
        </div>
      </form>
      <div className={`movie-grid ${styles.searchResults}`}>
        {/* // TODO dynamic results */}
        <article className="movie-card">
          <div className="movie-image">
            <img src="https://via.placeholder.com/300x450?text=Poster" alt="Movie poster" />
            <span className="movie-badge">4.0 ★</span>
            <button className="fav-toggle is-fav" title="Remove from favorites">
              ❤️
            </button>
          </div>
          <div className="movie-body">
            <h3 className="movie-title">The Matrix</h3>
            <p className="movie-meta">1999 · Sci-Fi / Action</p>
            <p className="movie-description">A computer hacker learns about the true nature of his reality and his role in the war...</p>
          </div>
          <div className="movie-footer">
            <button className="btn btn-small btn-outline">Details</button>
            <div className="movie-owner-actions">
              <button className="btn btn-small btn-ghost">Edit</button>
              <button className="btn btn-small btn-danger">Delete</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
