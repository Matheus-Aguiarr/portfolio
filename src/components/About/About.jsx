import "./About.css";
import myPic from "../../assets/eughibli.jpg";

const About = ({ onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-row ">
      <div>
        <img src={myPic} alt="" className="w-[200px]" />
      </div>
      <h1 className="text-white">
        About <span className="text-[var(--main-color)]">Me</span>
      </h1>
      <p>
        I'm 17yo, I started learning programming in january 2024. Nowadays, i'm
        focusing on backend with Java Springboot,{" "}
      </p>
    </div>
  );
};

export default About;
