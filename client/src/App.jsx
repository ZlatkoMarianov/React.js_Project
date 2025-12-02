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
import Edit from './components/edit/Edit.jsx';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import Logout from './components/auth/Logout.jsx';

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
            <Route path="/movies/:movieId/edit" element={<Edit />} />
            <Route path="/create" element={<Create />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/myMovies" element={<MyMovies />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
