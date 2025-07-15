import "./Skills.css";
import SkillsBox from "../SkillsBox/SkillsBox.jsx";
import { FaCss3, FaReact, FaJava } from "react-icons/fa";
import { BiLogoSpringBoot, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Skills = ({ onClick }) => {
  const skills = [
    {
      name: "React",
      icon: <FaReact size={30} color="var(--main-color)" />,
      description: "I do front-end development using React.",
    },
    {
      name: "Typescript", 
      icon: <BiLogoTypescript size={30} color="var(--main-color)"/>,
      description: "I use typescript in React for frontend development."
    },
    {
      name: "Java",
      icon: <FaJava size={30} color="var(--main-color)" />,
      description: "I do back-end development using Java",
    },
    {
      name: "Spring Boot",
      icon: <BiLogoSpringBoot size={30} color="var(--main-color)" />,
      description: "I do Rest APIs using springboot.",
    },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql size={30} color="var(--main-color)"/>,
      description: "I use postgres as my main database for backend applications",
    },
    {
      name: "Tailwindcss",
      icon: <RiTailwindCssFill size={30} color="var(--main-color)" />,
      description: "I stylize my web pages using TailwindCSS.",
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
