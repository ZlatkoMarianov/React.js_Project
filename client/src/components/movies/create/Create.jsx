import { useNavigate } from 'react-router';
import useMovieService from '../../../hooks/useMovieService.js';
import MovieForm from '../movieForm/MovieForm.jsx';
import useForm from '../../../hooks/useForm.js';

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
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    await create(values);

    navigate('/catalog');
  };

  const { register, formAction } = useForm( initialValues, submitHandler);

  return (
    <MovieForm
        formTitle="Create Movie"
        register={register}
        formAction={formAction}
        submitButton="Create" 
        onCancel={() => navigate('/catalog')}
    />
  );
}
