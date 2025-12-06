import { useNavigate, useParams } from 'react-router';
import useMovieService from '../../../hooks/useMovieService.js';
import { useEffect, useState } from 'react';
import EditForm from './EditForm.jsx';

export default function Edit() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { getOne, update } = useMovieService();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getOne(movieId).then((result) => setMovie(result));
  }, [movieId]);

  const editMovieHandler = async (values) => {
    try {
      await update(movieId, values);
      navigate(`/movies/${movieId}/details`);
    } catch (err) {
      alert(err.message);
    }
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return <EditForm key={movieId} movie={movie} editMovieHandler={editMovieHandler} />;
}
