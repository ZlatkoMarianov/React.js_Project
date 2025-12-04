import { Link, useNavigate } from 'react-router';
import styles from '../Auth.module.css';
import { useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';

export default function Login() {
  const { loginHandler } = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await loginHandler(email, password);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className={`section ${styles.authSection} ${styles.authPage}`}>
      <div className={styles.authCard}>
        <h2>Login</h2>
        <form className={styles.authForm} onSubmit={submitHandler}>
          <label className={styles.formField}>
            <span>Email</span>
            <input
              type="email"
              className="input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
          <label className={styles.formField}>
            <span>Password</span>
            <input
              type="password"
              className="input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
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
