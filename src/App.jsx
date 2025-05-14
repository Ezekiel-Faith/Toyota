import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import OurCompany from './pages/OurCompany';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import NewsRoom from './pages/Newsroom';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/newsroom' element={<NewsRoom />} />
        <Route path='/our-company' element={<OurCompany />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
