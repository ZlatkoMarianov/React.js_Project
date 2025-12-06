import { useState } from 'react';
import styles from './Search.module.css';
import useMovieService from '../../hooks/useMovieService.js';
import useForm from '../../hooks/useForm.js';
import MovieCard from '../movies/movieCard/MovieCard.jsx';

export default function Search() {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const { search } = useMovieService();

  const searchHandler = async (values) => {
    try {
      const movies = await search(values);
      setResults(movies);
      setSearched(true);
    } catch (err) {
      alert(err.message);
    }
  };

  const { values, register, formAction } = useForm(
    {
      title: '',
      // genre: '',
    },
    searchHandler,
  );

  const clearSearchHandle = () => {
    Object.keys(values).forEach((key) => {
      values[key] = '';
    });
    setResults([]);
    setSearched(false);
  };

  return (
    <section className={`section ${styles.searchPage}`}>
      <div className={styles.searchHeader}>
        <h2>Search Movies</h2>
        <p className="section-subtitle">Search movies by title, genre or year.</p>
      </div>
      <form className={styles.searchForm} action={formAction}>
        <div className={styles.formGrid}>
          <label className={styles.formField}>
            <span>Title contains</span>
            <input type="text" className="input" placeholder="e.g. Matrix" {...register('title')} />
          </label>
          {/* <label className={styles.formField}>
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
          </label> */}
        </div>
        <div className={styles.formActions}>
          <button className="btn btn-primary" type="submit">
            Search
          </button>
          <button className="btn btn-outline" type="button" onClick={clearSearchHandle}>
            Clear
          </button>
        </div>
      </form>
      <div className={`movie-grid ${styles.searchResults}`}>
        {searched && results.length === 0 && <p>No movies found matching your search criteria.</p>}
        {results.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
