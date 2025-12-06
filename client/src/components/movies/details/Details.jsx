import styles from './Details.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useMovieService from '../../../hooks/useMovieService.js';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';

export default function Details() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { getOne } = useMovieService();
  const [movie, setMovie] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    getOne(movieId)
      .then((result) => {
        console.log('got movie:', result);
        setMovie(result);
      })
      .catch(() => navigate('/catalog'));
  }, [movieId]);

  const isOwner = movie && user && movie._ownerId === user._id;

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <section className={`section ${styles.detailsPage}`}>
      <div className={styles.detailsLayout}>
        <div className={styles.detailsPoster}>
          <img src={movie.imageUrl} alt={movie.title} />
        </div>
        <div className={styles.detailsContent}>
          <h2>{movie.title}</h2>
          <p className={styles.detailsMeta}>
            {movie.year} · {movie.duration} min · {movie.genre}
          </p>
          <p className={styles.detailsRating}>
            Rating: <strong> {movie.rating} / 5</strong> ★
          </p>
          <p className={styles.detailsDescription}>{movie.description}</p>
          <div className={styles.detailsActions}>
            <Link to="/catalog" className="btn btn-outline">
              Back to catalog
            </Link>
            {/*  – Add/Remove favorites */}
            {/* <button className="btn btn-primary">Add to favorites</button> */}

            {isOwner && (
              <>
                <Link to={`/movies/${movieId}/edit`} className="btn btn-ghost">
                  Edit
                </Link>
                <button className="btn btn-danger">Delete</button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
