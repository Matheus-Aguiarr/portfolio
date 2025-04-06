import "./App.css";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Skills from "./components/Skills/Skills.jsx";
import { useState } from "react";

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
      <Header
        navMenu={`nav ${isMenuOpen ? "open" : ""}`}
        burgerMenu={toggleMenu}
      />
      <Home onClick={closeMenu} />
      <Skills onClick={closeMenu} />
    </div>
  );
}

export default App;
