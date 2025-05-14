import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Newsroom from './pages/Newsroom';
import OurCompany from './pages/OurCompany';
import Home from './pages/Home';
import NavBar from './pages/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/newsroom' element={<Newsroom />} />
        <Route path='/our-company' element={<OurCompany />} />
      </Routes>
    </>
  );
}
export default App;
