import MovieCard from '../movieCard/MovieCard.jsx';
import './MoviesCatalog.css';

export default function MoviesCatalog() {
  return (
    <section className="section" id="catalog-page">
      <div className="section-header">
        <h2>Movies Catalog</h2>
        <div className="section-actions">
          <input type="text" className="input" placeholder="Search by title (local filter)..." />
          <select className="input">
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
