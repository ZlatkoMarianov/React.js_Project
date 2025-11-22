import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.footerInner}`}>
        <p>© 2025 CineVerse. All rights reserved.</p>
        <p className={styles.footerMeta}>React.js SPA Exam Project</p>
      </div>
    </footer>
  );
}
