import { Route, Routes } from 'react-router';

import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';

function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
