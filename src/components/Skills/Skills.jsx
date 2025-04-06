import "./Skills.css";

const Skills = ({ onClick }) => {
  return (
    <div>
      <h1
        className="text-white mt-[500px] font-medium text-[32px] text-center"
        onClick={onClick}
      >
        My <span className="text-[var(--main-color)]">Skills</span>
      </h1>
      <section className="skills-container flex flex-row justify-center gap-[27px] mt-[50px]"></section>
    </div>
  );
};

export default Skills;
