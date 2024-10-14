import './App.css';
import { Routes, Route } from 'react-router-dom';
import Fixed from './components/Fixed';
import Home from './components/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import News from './pages/News';
import Library from './pages/Library';
import Samples from './pages/Samples';
import Main from './pages/Main';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Fixed />}>
          <Route index element= {<Home />} /> 
          <Route path="main" element={<Main />} />
          <Route path="hero" element={<Hero />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="news" element={<News />} />
          <Route path="library" element={<Library />} />
          <Route path="samples" element={<Samples />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
