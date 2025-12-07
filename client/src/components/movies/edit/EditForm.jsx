import { useNavigate } from 'react-router';
import useForm from '../../../hooks/useForm.js';
import MovieForm from '../movieForm/MovieForm.jsx';
import useValidation from '../../../hooks/useValidation.js';

export default function EditForm({ movie, editMovieHandler }) {
  const navigate = useNavigate();
  const { validateMovie } = useValidation();

  const { register, formAction, errors, touched } = useForm(movie, editMovieHandler, validateMovie);

  return (
    <MovieForm
      formTitle="Edit Movie"
      register={register}
      formAction={formAction}
      submitButton="Update"
      onCancel={() => navigate(`/movies/${movie._id}/details`)}
      errors={errors}
      touched={touched}
    />
  );
}
