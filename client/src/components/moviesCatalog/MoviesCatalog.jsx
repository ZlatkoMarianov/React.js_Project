export default function MoviesCatalog() {
  return (
    <section className="section" id="catalog-page">
      <div className="section-header">
        <h2>Movies Catalog</h2>
        <div className="section-actions">
          <input type="text" className="input" placeholder="Search by title (local filter)..." />
          <select className="input">
            <option value="">All genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Comedy</option>
            <option>Thriller</option>
          </select>
        </div>
      </div>
      <div className="movie-grid">
        {/* MOVIE CARD */}
        {/* <article className="movie-card">
          <div className="movie-image">
            <img
              src="https://i.ytimg.com/vi/VMobEB8voH8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsa_3mrNGYakRKZ1g-5zwT8VK95A"
              alt="Movie poster"
            />
            <span className="movie-badge">4.5 ★</span>

            <button className="fav-toggle is-fav" title="Remove from favourites">
              ❤️
            </button>
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
        </article> */}
      </div>
    </section>
  );
}
