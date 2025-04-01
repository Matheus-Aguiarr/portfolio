import "./Home.css";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

// Proxima coisa a fazer: addDownloadCV;

const Home = () => {
  return (
    <div className=" mt-[250px] flex flex-col justify-center gap-[5px]">
      <h1 className="text-center text-white font-extralight text-[60px] mb-[-20px]">
        Hello, I'm{" "}
        <span className="text-[var(--main-color)] font-medium">Matheus</span>
      </h1>
      <h2 className="text-[45px] text-white font-extralight text-center">
        <span className="font-medium text-[var(--main-color)]">Fullstack</span>{" "}
        Developer
      </h2>
      <div className="links flex flex-row justify-center gap-[30px]">
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

      <a
        href=""
        className="shadow-lg shadow-[#00aaff52] bg-[var(--main-color)] w-[fit-content] m-auto text-[#fff] mt-4 p-2 rounded-xl px-8 hover:bg-[var(--bg-color)] duration-[.5s] hover:text-[var(--main-color)] hover:shadow-[#00aaff8e] hover:tracking-[0.3px]"
      >
        Download CV
      </a>
    </div>
  );
};

export default Home;
