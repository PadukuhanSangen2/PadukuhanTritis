
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Berita from './pages/Berita';
import Potensi from './pages/Potensi';
import Galeri from './pages/Galeri';
import Kontak from './pages/Kontak';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/potensi" element={<Potensi />} />
            <Route path="/galeri" element={<Galeri />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
