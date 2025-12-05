import styles from './MovieForm.module.css';

export default function MovieForm({ formTitle, register, formAction, submitButton = 'Save', onCancel = null }) {
  return (
    <section className={`section ${styles.movieFormPage}`}>
      <div className={styles.formCard}>
        <h2 className={styles.formTitle}>{formTitle}</h2>
        <form className={styles.movieForm} action={formAction}>
          <label className={styles.formField}>
            <span>Title</span>
            <input type="text" className="input" placeholder="Movie title" {...register('title')} />
          </label>
          <label className={styles.formField}>
            <span>Year</span>
            <input type="number" className="input" placeholder={2024} {...register('year')} />
          </label>
          <label className={styles.formField}>
            <span>Genre</span>
            <input type="text" className="input" placeholder="Sci-Fi, Drama, Action..." {...register('genre')} />
          </label>
          <label className={styles.formField}>
            <span>Duration (minutes)</span>
            <input type="number" className="input" placeholder="120" {...register('duration')} />
          </label>
          <label className={styles.formField}>
            <span>Rating (1-5)</span>
            <input type="number" className="input" min={1} max={5} step="0.1" placeholder="4.5" {...register('rating')} />
          </label>
          <label className={styles.formField}>
            <span>Image URL</span>
            <input type="text" className="input" placeholder="https://..." {...register('imageUrl')} />
          </label>
          <label className={styles.formField}>
            <span>Description</span>
            <textarea className="input textarea" rows={5} placeholder="Short summary of the movie..." {...register('description')} />
          </label>
          <div className={styles.formActions}>
            <button className="btn btn-primary" type="submit">
              {submitButton}
            </button>
            {onCancel && (
              <button className="btn btn-outline" type="button" onClick={onCancel}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
