import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Home from '../Home'
import Gallery from '../Components/Gallery';
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Viewmore from "../Components/Viewmore";



function Approuter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Hero/>} />
        <Route path="/" element={<About/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/viewmore" element={<Viewmore />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default Approuter;
