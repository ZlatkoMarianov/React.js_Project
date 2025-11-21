import './MovieCard.css';

export default function MovieCard() {
  return (
    <article className="movie-card">
      <div className="movie-image">
        <img
          src="https://i.ytimg.com/vi/VMobEB8voH8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsa_3mrNGYakRKZ1g-5zwT8VK95A"
          alt="Movie poster"
        />
        <span className="movie-badge">4.5 ★</span>

        <button className="fav-toggle is-fav" title="Remove from favourites">
          ❤️
        </button>
        {/* <button className="fav-toggle" title="Add to favourites">♡</button> */}
      </div>
      <div className="movie-body">
        <h3 className="movie-title">Inception</h3>
        <p className="movie-meta">2010 · Sci-Fi / Action</p>
        <p className="movie-description">A thief who steals corporate secrets through the use of dream-sharing technology...</p>
      </div>
      <div className="movie-footer">
        <button className="btn btn-small btn-outline">Details</button>

        <div className="movie-owner-actions">
          <button className="btn btn-small btn-ghost">Edit</button>
          <button className="btn btn-small btn-danger">Delete</button>
        </div>
      </div>
    </article>
  );
}
