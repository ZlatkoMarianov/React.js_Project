import { Link, useNavigate } from 'react-router-dom';
import styles from '../Auth.module.css';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';
import useForm from '../../../hooks/useForm.js';
import useValidation from '../../../hooks/useValidation.js';
import { toast } from 'react-toastify';

const initialValues = {
  email: '',
  password: '',
  rePassword: '',
};

export default function Register() {
  const { registerHandler } = useAuthContext();
  const { validateAuthRegister } = useValidation();
  const navigate = useNavigate();

  const registerSubmitHandler = async (values) => {

    try {
      await registerHandler(values.email, values.password);
      toast.success('Account created successfully!');
      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const { register, formAction, errors, touched } = useForm(initialValues, registerSubmitHandler, validateAuthRegister);

  return (
    <section className={`section ${styles.authSection} ${styles.authPage}`}>
      <div className={styles.authCard}>
        <h2>Register</h2>
        <form action={formAction} className={styles.authForm}>
          <label className={styles.formField}>
            <span>Email</span>
            <input
              {...register('email')}
              type="email"
              className={`input ${touched.email && errors.email ? styles.inputError : ''}`}
              placeholder="you@example.com"
            />
            {touched.email && errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </label>
          <label className={styles.formField}>
            <span>Password</span>
            <input
              {...register('password')}
              type="password"
              className={`input ${touched.password && errors.password ? styles.inputError : ''}`}
              placeholder="••••••••"
            />
            {touched.password && errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
          </label>
          <label className={styles.formField}>
            <span>Repeat Password</span>
            <input
              {...register('rePassword')}
              type="password"
              className={`input ${touched.rePassword && errors.rePassword ? styles.inputError : ''}`}
              placeholder="••••••••"
            />
            {touched.rePassword && errors.rePassword && <span className={styles.errorMessage}>{errors.rePassword}</span>}
          </label>
          <button className={`btn btn-primary ${styles.authSubmit}`} type="submit">
            Create account
          </button>
          <p className={styles.authAlt}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
