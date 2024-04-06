import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import InteractiveMap from './pages/map';
import Booklet from './components/Booklet'; // Fix: Corrected the import statement

const App = () => {
  return (
    <div className='bg-slate-300/20'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<InteractiveMap />} />
          <Route path="/booklet" element={<Booklet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
