import { Route, Routes } from 'react-router';

import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';

function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="" element={'HEllo'} />
          </Routes>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
