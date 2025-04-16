import "./Skills.css";
import SkillsBox from "../SkillsBox/SkillsBox.jsx";
import { FaNodeJs, FaCss3, FaReact, FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";

const Skills = ({ onClick }) => {
  const skills = [
    {
      name: "ReactJS",
      icon: <FaReact size={30} color="var(--main-color)" />,
      description: "I do front-end development using ReactJS.",
    },
    {
      name: "Java",
      icon: <FaJava size={30} color="var(--main-color)" />,
      description: "I do back-end development using Java",
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs size={30} color="var(--main-color)" />,
      description: "I do back-end development using NodeJS",
    },
    {
      name: "CSS3",
      icon: <FaCss3 size={30} color="var(--main-color)" />,
      description: "I stylize my web pages using CSS3.",
    },
    {
      name: "Spring Boot",
      icon: <BiLogoSpringBoot size={30} color="var(--main-color)" />,
      description: "I study one of the most popular Java frameworks.",
    },
    // Add more skills as needed
  ];

  return (
    <div id="skills" onClick={onClick}>
      <h1 className="text-white  font-medium text-[32px] text-center">
        My <span className="text-[var(--main-color)]">Skills</span>
      </h1>
      <section className="skills-container flex flex-row justify-center gap-[27px] mt-[50px] mb-[50px]">
        {skills.map((skill) => {
          return (
            <SkillsBox
              key={skill.name}
              name={skill.name}
              description={skill.description}
              icon={skill.icon}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Skills;
