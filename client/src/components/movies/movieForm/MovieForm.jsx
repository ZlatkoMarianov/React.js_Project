import styles from './MovieForm.module.css';

export default function MovieForm({ title }) {
  return (
    <section className={`section ${styles.movieFormPage}`}>
      <div className={styles.formCard}>
        <h2 className={styles.formTitle}>{title}</h2>
        <form className={styles.movieForm}>
          <label className={styles.formField}>
            <span>Title</span>
            <input type="text" className="input" placeholder="Movie title" />
          </label>
          <label className={styles.formField}>
            <span>Year</span>
            <input type="number" className="input" placeholder={2024} />
          </label>
          <label className={styles.formField}>
            <span>Genre</span>
            <input type="text" className="input" placeholder="Sci-Fi, Drama, Action..." />
          </label>
          <label className={styles.formField}>
            <span>Image URL</span>
            <input type="text" className="input" placeholder="https://..." />
          </label>
          <label className={styles.formField}>
            <span>Description</span>
            <textarea className="input textarea" rows={5} placeholder="Short summary of the movie..." defaultValue={''} />
          </label>
          <label className={styles.formField}>
            <span>Rating (1–5)</span>
            <input type="number" className="input" min={1} max={5} step="0.1" placeholder="4.5" />
          </label>
          <div className={styles.formActions}>
            <button className="btn btn-primary" type="submit">
              Save
            </button>
            <button className="btn btn-outline" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
