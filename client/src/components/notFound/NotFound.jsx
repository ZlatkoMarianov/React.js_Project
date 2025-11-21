import { Link } from 'react-router';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="section notfound-container" id="not-found-page">
      <div className="notfound-box">
        <img src="../../../public/images/notFound.png" alt="Broken Film" className="notfound-image" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you're looking for doesn't exist. It may have been moved or deleted.</p>
        <Link to="/" className="btn-back">
          ⬅ Back to Home
        </Link>
      </div>
    </section>
  );
}
