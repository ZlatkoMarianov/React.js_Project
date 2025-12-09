import { useNavigate } from 'react-router-dom';
import useMovieService from '../../../hooks/useMovieService.js';
import MovieForm from '../movieForm/MovieForm.jsx';
import useForm from '../../../hooks/useForm.js';
import useValidation from '../../../hooks/useValidation.js';
import { toast } from 'react-toastify';

const initialValues = {
  title: '',
  year: '',
  genre: '',
  duration: '',
  rating: '',
  imageUrl: '',
  description: '',
};

export default function Create() {
  const { create } = useMovieService();
  const { validateMovie } = useValidation();
  const navigate = useNavigate();

  const createMovieHandler = async (values) => {
    try {
      await create(values);
      toast.success('Movie created successfully!')
      navigate('/catalog');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const { register, formAction, errors, touched } = useForm(initialValues, createMovieHandler, validateMovie);

  return (
    <MovieForm
      formTitle="Create Movie"
      register={register}
      formAction={formAction}
      submitButton="Create"
      onCancel={() => navigate('/')}
      errors={errors}
      touched={touched}
    />
  );
}
