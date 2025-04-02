import "./Home.css";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GiSpiderMask } from "react-icons/gi";
import { GiLongLeggedSpider } from "react-icons/gi";
import { GiHangingSpider } from "react-icons/gi";
// Proxima coisa a fazer: addDownloadCV;

const Home = () => {
  return (
    <div className="home mt-[250px] flex flex-col justify-center gap-[5px]">
      <div className=" flex flex-row-reverse m-auto">
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
        <a href="">
          <FiLinkedin size={40} color="var(--main-color)" />
        </a>
        <a href="">
          <FaInstagram size={40} color="var(--main-color)" />
        </a>
        <a href="">
          <FiGithub size={40} color="var(--main-color)" />
        </a>
      </div>

      <div className="m-auto mt-4 ">
        <a
          href=""
          className="shadow-lg shadow-[#ff1e1e6c] bg-[var(--main-color)] w-[fit-content] m-auto text-[#fff] mt-4 p-2 rounded-xl px-8 hover:bg-[var(--bg-color)] duration-[.5s] hover:text-[var(--main-color)] border-1 border-[var(--main-color)] font-bold"
        >
          Download CV
        </a>
        <GiHangingSpider
          size={40}
          color="var(--main-color)"
          className="mt-1 m-auto"
        />
      </div>
    </div>
  );
};

export default Home;
