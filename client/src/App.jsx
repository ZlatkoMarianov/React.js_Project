import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import MoviesCatalog from './components/moviesCatalog/MoviesCatalog.jsx';
import NotFound from './components/notFound/NotFound.jsx';

function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<MoviesCatalog />} />
             
            {/* <Route path="/catalog" element={<MoviesCatalog />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
