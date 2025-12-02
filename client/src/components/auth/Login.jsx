import styles from './Auth.module.css'

export default function Login() {
    return (
         <section className={`section ${styles.authSection} ${styles.authPage}`}>
      <div className={styles.authCard}>
        <h2>Login</h2>
        <form className={styles.authForm}>
          <label className={styles.formField}>
            <span>Email</span>
            <input type="email" className="input" placeholder="you@example.com" />
          </label>
          <label className={styles.formField}>
            <span>Password</span>
            <input type="password" className="input" placeholder="••••••••" />
          </label>
          <button className={`btn btn-primary ${styles.authSubmit}`} type="submit">
            Login
          </button>
          <p className={styles.authAlt}>
            {/* Don't have an account? <Link to="/register">Register</Link> */}
          </p>
        </form>
      </div>
    </section>
    );
}