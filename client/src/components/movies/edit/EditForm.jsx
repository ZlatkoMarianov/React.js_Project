import { useNavigate } from 'react-router';
import useForm from '../../../hooks/useForm.js';
import MovieForm from '../movieForm/MovieForm.jsx';

export default function EditForm({ movie, editMovieHandler }) {
  const navigate = useNavigate();
  const { register, formAction } = useForm(movie, editMovieHandler);

  return (
    <MovieForm
      formTitle="Edit Movie"
      register={register}
      formAction={formAction}
      submitButton="Update"
      onCancel={() => navigate(`/movies/${movie._id}/details`)}
    />
  );
}
