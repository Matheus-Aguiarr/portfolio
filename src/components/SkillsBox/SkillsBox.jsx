import "./SkillsBox.css";

const SkillsBox = ({ description, name, icon }) => {
  return (
    <div className="skills-box w-[220px] h-[250px] flex flex-col bg-[var(--bg-color03)] rounded-[10px] justify-center items-center border-[var(--main-color)] border-[1px] text-[white] p-2 gap-2 hover:scale-[1.05] duration-[.5s] cursor-pointer hover:inset-shadow-sm inset-shadow-black">
      <div>{icon}</div>
      <h2 className="font-semibold text-center">{name}</h2>
      <p className="text-center text-[14px]">{description}</p>
    </div>
  );
};

export default SkillsBox;
