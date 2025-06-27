import "./Home.css";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GiSpiderMask } from "react-icons/gi";
import { GiLongLeggedSpider } from "react-icons/gi";
import { GiHangingSpider } from "react-icons/gi";
import cv from "../../assets/curriculoMatheusDev.pdf";
import { motion } from "motion/react";

// Proxima coisa a fazer: addDownloadCV;

const Home = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="home mt-[250px] flex flex-col justify-center gap-[5px] mb-[500px]"
      onClick={onClick}
      id="home"
    >
      <div className="content-home flex flex-row-reverse m-auto">
        <GiSpiderMask
          size={30}
          color="var(--blue)"
          className="spidermask w-[fit-content] -rotate-30 absolute mt-2 mr-[-5px]"
        />
        <h1 className="text-center text-white font-extralight text-[60px] mb-[-20px]">
          Hello, I'm{" "}
          <span className="text-[var(--main-color)] font-medium">Matheus</span>
        </h1>
      </div>
      <h2 className="text-[45px] text-white font-extralight text-center">
        <span className="font-medium text-[var(--main-color)]">Fullstack</span>{" "}
        Developer
      </h2>
      <div className="links flex flex-row justify-center gap-[50px]">
        <a
          href="https://www.linkedin.com/in/matheus-aguiar-aguiar-de-almeida-695a17352/"
          className="hover:scale-[1.05] duration-[.5s] "
          target="_blank"
        >
          <FiLinkedin size={40} color="var(--main-color)" />
        </a>
        <a
          href="https://www.instagram.com/theussz01/"
          className="hover:scale-[1.05] duration-[.5s]"
          target="_blank"
        >
          <FaInstagram size={40} color="var(--main-color)" />
        </a>
        <a
          href="https://github.com/Matheus-Aguiarr"
          className="hover:scale-[1.05] duration-[.5s]"
          target="_blank"
        >
          <FiGithub size={40} color="var(--main-color)" />
        </a>
      </div>

      <div className="m-auto mt-4 ">
        <a
          href={cv}
          className="shadow-lg shadow-[#ff1e1e6c] bg-[var(--main-color)] w-[fit-content] m-auto text-[#fff] mt-4 p-2 rounded-xl px-8 hover:bg-[var(--bg-color)] duration-[.5s] hover:text-[var(--main-color)] border-1 border-[var(--main-color)] font-bold"
          download
        >
          Download CV
        </a>
        <GiHangingSpider
          size={40}
          color="var(--main-color)"
          className="mt-1 m-auto"
        />
      </div>
    </motion.div>
  );
};

export default Home;
