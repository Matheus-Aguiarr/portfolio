import "./App.css";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Skills from "./components/Skills/Skills.jsx";
import { useState } from "react";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Particles from "./Animations/Particles.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[var(--bg-color)]">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className={"particles-home"}
      />
      <div className="app-content">
        <Header
          navMenu={`nav ${isMenuOpen ? "open" : ""}`}
          burgerMenu={toggleMenu}
        />
        <Home onClick={closeMenu} />
        <Skills onClick={closeMenu} />
        <Portfolio onClick={closeMenu} />
        <Contact onClick={closeMenu} />
      </div>
    </div>
  );
}

export default App;
