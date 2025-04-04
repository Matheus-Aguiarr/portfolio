import "./Header.css";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="" className="burger-menu" onClick={toggleMenu}>
          <IoMenu size={40} />
        </a>
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item hover:tracking-[.3px] duration-[.5s] hover:text-[var(--main-color)]">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item hover:tracking-[.3px] duration-[.5s] hover:text-[var(--main-color)]">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-item hover:tracking-[.3px] duration-[.5s] hover:text-[var(--main-color)]">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item hover:tracking-[.3px] duration-[.5s] hover:text-[var(--main-color)]">
            <a href="#contact">Contact</a>
          </li>
          <li className="nav-item hover:tracking-[.3px] duration-[.5s] hover:text-[var(--main-color)]">
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
