import Header from "./components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ParticlesStuff from "./components/ParticlesStuff";
import Resume from "./components/Resume";

export default function App() {
  return (
    <div>
      <ParticlesStuff/>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/resume' element={<Resume/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path="/contact" element={<Contact />}/>
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </div>
  );
}
