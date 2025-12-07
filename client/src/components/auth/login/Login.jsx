import { Link, useNavigate } from 'react-router';
import styles from '../Auth.module.css';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';
import useValidation from '../../../hooks/useValidation.js';
import useForm from '../../../hooks/useForm.js';

const initialValues = {
  email: '',
  password: '',
};

export default function Login() {
  const { loginHandler } = useAuthContext();
  const { validateAuthLogin } = useValidation();
  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    try {
      await loginHandler(values.email, values.password);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  const { register, formAction, errors, touched } = useForm(initialValues, loginSubmitHandler, validateAuthLogin);

  return (
    <section className={`section ${styles.authSection} ${styles.authPage}`}>
      <div className={styles.authCard}>
        <h2>Login</h2>
        <form className={styles.authForm} action={formAction}>
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
          <button className={`btn btn-primary ${styles.authSubmit}`} type="submit">
            Login
          </button>
          <p className={styles.authAlt}>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
