import "./SkillsBox.css";

const SkillsBox = ({ description, name, icon }) => {
  return (
    <div className="skills-box w-[190px] h-[225px] flex flex-col bg-[#283142] rounded-[10px] justify-center items-center border-[var(--main-color)] border-[1px] text-[white] drop-shadow-md p-2 gap-2 hover:scale-[1.05] duration-[.5s] cursor-pointer ">
      <div>{icon}</div>
      <h2 className="font-semibold text-center">{name}</h2>
      <p className="text-center text-[14px]">{description}</p>
    </div>
  );
};

export default SkillsBox;
