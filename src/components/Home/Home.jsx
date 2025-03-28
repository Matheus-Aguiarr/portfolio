import "./Home.css";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Home = () => {
  return (
    <div className=" mt-[250px] flex flex-col justify-center gap-[5px]">
      <h1 className="text-center text-white font-extralight text-[60px] mb-[-20px]">
        Hello, I'm <span className="text-[#00AAFF] font-medium">Matheus</span>
      </h1>
      <h2 className="text-[45px] text-white font-extralight text-center">
        <span className="font-medium text-[#00AAFF]">Fullstack</span> Developer
      </h2>
      <div className="links flex flex-row justify-center gap-[30px]">
        <a href="">
          <FiLinkedin size={40} color="#00AAFF" />
        </a>
        <a href="">
          <FaInstagram size={40} color="#00AAFF" />
        </a>
        <a href="">
          <FiGithub size={40} color="#00AAFF" />
        </a>
      </div>
    </div>
  );
};

export default Home;
