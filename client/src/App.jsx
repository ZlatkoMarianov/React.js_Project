import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import MoviesCatalog from './components/moviesCatalog/MoviesCatalog.jsx';
import NotFound from './components/notFound/NotFound.jsx';
import Search from './components/search/Search.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import MyMovies from './components/myMovies/MyMovies.jsx';
import Create from './components/create/Create.jsx';
import Details from './components/details/Details.jsx';

function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<MoviesCatalog />} />
            <Route path="/movies/:movieId/details" element={<Details />} />
            <Route path="/create" element={<Create />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/myMovies" element={<MyMovies />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
