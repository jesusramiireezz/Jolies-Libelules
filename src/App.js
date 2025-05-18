import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// COMPONENTES
import Navbar from './components/Navbar';
import './components/Navbar.css';
import Footer from './components/Footer';
import './components/Footer.css';

// PÁGINAS Y BLOQUES
import Hero from './components/Hero';
import './components/Hero.css';
import Servicios from './components/Servicios';
import './components/Servicios.css';
import ServiciosDetalle from './pages/ServiciosDetalle';
import './pages/ServiciosDetalle.css';
import DondeEstamos from './pages/DondeEstamos';
import Reservar from './pages/Reservar';
import Contacto from './pages/Contacto';
import './pages/Contacto.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Servicios />
            </>
          } />
          <Route path="/servicios" element={<ServiciosDetalle />} />
          <Route path="/donde-encontrarnos" element={<DondeEstamos />} />
          <Route path="/reservar" element={<Reservar />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
