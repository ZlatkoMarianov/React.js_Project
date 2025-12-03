import { Link } from 'react-router';
import styles from '../Auth.module.css'

export default function Register() {
  return (
    <section className={`section ${styles.authSection} ${styles.authPage}`}>
      <div className={styles.authCard}>
        <h2>Register</h2>
        <form className={styles.authForm}>
          <label className={styles.formField}>
            <span>Email</span>
            <input type="email" className="input" placeholder="you@example.com" />
          </label>
          <label className={styles.formField}>
            <span>Password</span>
            <input type="password" className="input" placeholder="••••••••" />
          </label>
          <label className={styles.formField}>
            <span>Repeat Password</span>
            <input type="password" className="input" placeholder="••••••••" />
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
