import { Link, useNavigate } from 'react-router-dom';
import styles from '../Auth.module.css';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';
import useForm from '../../../hooks/useForm.js';

const initialValues = {
  email: '',
  password: '',
  rePassword: '',
};

export default function Register() {
  const { registerHandler } = useAuthContext();
  const navigate = useNavigate();

  const registerSubmitHandler = async (values) => {
    const { email, password, rePassword } = values;

    if (!email || !password || !rePassword) {
      return alert('All fields are required!');
    }

    if (password !== rePassword) {
      return alert('Password mismatch!');
    }

    try {
      await registerHandler(email, password);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  const { register, formAction } = useForm(initialValues, registerSubmitHandler);

  return (
    <section className={`section ${styles.authSection} ${styles.authPage}`}>
      <div className={styles.authCard}>
        <h2>Register</h2>
        <form action={formAction} className={styles.authForm}>
          <label className={styles.formField}>
            <span>Email</span>
            <input {...register('email')} type="email" className="input" placeholder="you@example.com" />
          </label>
          <label className={styles.formField}>
            <span>Password</span>
            <input {...register('password')} type="password" className="input" placeholder="••••••••" />
          </label>
          <label className={styles.formField}>
            <span>Repeat Password</span>
            <input {...register('rePassword')} type="password" className="input" placeholder="••••••••" />
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
