import "./Skills.css";
import SkillsBox from "../SkillsBox/SkillsBox.jsx";
import { FaNodeJs, FaCss3, FaReact, FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { motion } from "framer-motion";

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
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <SkillsBox
                key={skill.name}
                name={skill.name}
                description={skill.description}
                icon={skill.icon}
              />
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};

export default Skills;
