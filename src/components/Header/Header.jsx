import "./Header.css";
import { IoMenu } from "react-icons/io5";

const Header = ({ navMenu, burgerMenu }) => {
  const hoverNav =
    "nav-item hover:tracking-[.3px] duration-[.5s] hover:text-[var(--main-color)]";

  return (
    <header className="header">
      <div className="header-container bg-[(--bg-color02)]/30 backdrop-blur-lg ">
        <a href="" className="burger-menu" onClick={burgerMenu}>
          <IoMenu size={40} />
        </a>
      </div>
      <nav className={navMenu}>
        <ul className="nav-list">
          <li className={hoverNav}>
            <a href="#home">Home</a>
          </li>
          <li className={hoverNav}>
            <a href="#skills">Skills</a>
          </li>
          <li className={hoverNav}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className={hoverNav}>
            <a href="#contact">Contact</a>
          </li>
          <li className={hoverNav}>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
