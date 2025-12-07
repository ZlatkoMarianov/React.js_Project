import styles from './MovieForm.module.css';

export default function MovieForm({ formTitle, register, formAction, submitButton = 'Save', onCancel = null, errors = {}, touched = {} }) {
  return (
    <section className={`section ${styles.movieFormPage}`}>
      <div className={styles.formCard}>
        <h2 className={styles.formTitle}>{formTitle}</h2>
        <form className={styles.movieForm} action={formAction}>
          <label className={styles.formField}>
            <span>Title</span>
            <input
              type="text"
              className={`input ${touched.title && errors.title ? styles.inputError : ''}`}
              placeholder="Movie title"
              {...register('title')}
            />
            {touched.title && errors.title && <span className={styles.errorMessage}>{errors.title}</span>}
          </label>

          <label className={styles.formField}>
            <span>Year</span>
            <input
              type="number"
              className={`input ${touched.year && errors.year ? styles.inputError : ''}`}
              placeholder={2024}
              {...register('year')}
            />
            {touched.year && errors.year && <span className={styles.errorMessage}>{errors.year}</span>}
          </label>

          <label className={styles.formField}>
            <span>Genre</span>
            <input
              type="text"
              className={`input ${touched.genre && errors.genre ? styles.inputError : ''}`}
              placeholder="Sci-Fi, Drama, Action..."
              {...register('genre')}
            />
            {touched.genre && errors.genre && <span className={styles.errorMessage}>{errors.genre}</span>}
          </label>

          <label className={styles.formField}>
            <span>Duration (minutes)</span>
            <input
              type="number"
              className={`input ${touched.duration && errors.duration ? styles.inputError : ''}`}
              placeholder="120"
              {...register('duration')}
            />
            {touched.duration && errors.duration && <span className={styles.errorMessage}>{errors.duration}</span>}
          </label>

          <label className={styles.formField}>
            <span>Rating (1-5)</span>
            <input
              type="number"
              className={`input ${touched.rating && errors.rating ? styles.inputError : ''}`}
              // min={1}
              // max={5}
              step="0.1"
              placeholder="4.5"
              {...register('rating')}
            />
            {touched.rating && errors.rating && <span className={styles.errorMessage}>{errors.rating}</span>}
          </label>

          <label className={styles.formField}>
            <span>Image URL</span>
            <input
              type="text"
              className={`input ${touched.imageUrl && errors.imageUrl ? styles.inputError : ''}`}
              placeholder="https://..."
              {...register('imageUrl')}
            />
            {touched.imageUrl && errors.imageUrl && <span className={styles.errorMessage}>{errors.imageUrl}</span>}
          </label>

          <label className={styles.formField}>
            <span>Description</span>
            <textarea
              className={`input textarea ${touched.description && errors.description ? styles.inputError : ''}`}
              rows={5}
              placeholder="Short summary of the movie..."
              {...register('description')}
            />
            {touched.description && errors.description && <span className={styles.errorMessage}>{errors.description}</span>}
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
