import MovieCard from '../movieCard/MovieCard.jsx';
import styles from './MyMovies.module.css';

export default function MyMovies() {
  return (
    <section className={`section ${styles.myMoviesPage}`}>
      <div className={styles.sectionHeader}>
        <h2>My Movies</h2>
        {/* // TODO : to change section-subtitle */}
        <p className="section-subtitle">Movies created by the current user (ownerId == user._id).</p>
      </div>
      <div className={`movie-grid ${styles.myMoviesGrid}`}>

        {/* // TODO
        <MovieCard /> */}
        
        {/* <article className="movie-card">
            <div className="movie-image">
              <img
                src="https://resizing.flixster.com/vQPZM_fQCjrk1MByVMdJsKZEXIA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22804_v_h6_am.jpg"
                alt="Movie poster"
              />
              <span className="movie-badge">4.2 ★</span>
              <button className="fav-toggle is-fav" title="Remove from favorites">
                ❤️
              </button>
            </div>
            <div className="movie-body">
              <h3 className="movie-title">My Custom Movie</h3>
              <p className="movie-meta">2025 · Custom / Demo</p>
              <p className="movie-description">This is a demo movie created by the logged user. In the real app, this is fetched from the API.</p>
            </div>
            <div className="movie-footer">
              <button className="btn btn-small btn-outline">Details</button>
              <div className="movie-owner-actions">
                <button className="btn btn-small btn-ghost">Edit</button>
                <button className="btn btn-small btn-danger">Delete</button>
              </div>
            </div>
          </article> */}
      </div>
    </section>
  );
}
