import "./App.css";
import { Routes, Route } from "react-router-dom";
import Fixed from "./components/Fixed";
import Home from "./components/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import News from "./pages/news/News";
import Library from "./pages/library/Library";
import Samples from "./pages/samples/Samples";
import Main from "./pages/main/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./pages/services/Services";
import Error from "./pages/error/Error";
import Faqs from "./components/Faqs";
import More from "./pages/blog/More";
import SimilarPosts from "./pages/blog/SimilarPosts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Fixed />}> */}
        <Route index element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/news" element={<News />} />
        <Route path="/library" element={<Library />} />
        <Route path="/samples" element={<Samples />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/blog-single-left-sidebar/:id" element={<More />} />
        <Route path="/news-single/:id" element={<SimilarPosts />} />
        <Route path="/*" element={<Error />} />
        {/* </Route> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
