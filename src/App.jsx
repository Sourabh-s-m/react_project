import { Route, Routes } from 'react-router-dom';
import './fonts/fonts.css';
import Home from './pages/Home';
import Navbar from './pages/navbar/Navbar';
import Services from './pages/Services';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/gallery' element={<Gallery />} />
    </Routes>
  );
}

export default App;
