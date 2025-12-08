import { useNavigate, useParams } from 'react-router';
import useMovieService from '../../../hooks/useMovieService.js';
import { useEffect, useState } from 'react';
import EditForm from './EditForm.jsx';
import Spinner from '../../common/Spinner.jsx';

export default function Edit() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { getOne, update } = useMovieService();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getOne(movieId)
      .then((result) => setMovie(result))
      .finally(() => setLoading(false));
  }, [movieId]);

  const editMovieHandler = async (values) => {
    try {
      await update(movieId, values);
      navigate(`/movies/${movieId}/details`);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return <EditForm key={movieId} movie={movie} editMovieHandler={editMovieHandler} />;
}
