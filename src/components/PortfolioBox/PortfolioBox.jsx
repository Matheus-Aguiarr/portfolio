const PortfolioBox = ({
  img,
  name,
  technologies,
  description,
  urlGit,
  urlWeb,
}) => {
  return (
    <div className="portfolioBox bg-[var(--bg-color03)] max-w-[300px] min-w-[300px] flex flex-col p-4 rounded-[10px] gap-[10px] hover:scale-[1.05] duration-[.5s] cursor-pointer border-[var(--main-color)] border-1 hover:inset-shadow-sm inset-shadow-black ">
      <div className="w-[90%] m-auto">
        <a href={urlWeb} target="_blank">
          <img
            src={img}
            alt=""
            className="rounded-md hover:scale-[1.05] duration-[0.5s] shadow-3xl shadow-[var(--bg-color03)]"
          />
        </a>
      </div>
      <h2 className="text-white text-[16px] text-center font-semibold">
        {name} -{" "}
        <span className="text-[var(--main-color)]">{technologies}</span>
      </h2>
      <p className="text-[14px] text-justify text-white">{description}</p>
      <div className="m-auto flex flex-row gap-[10px] font-semibold">
        <a
          href={urlGit}
          className="bg-[var(--main-color)] p-2 text-[12px]  rounded-md text-white hover:bg-transparent border-[var(--main-color)] border-1 duration-[.5s] hover:text-[var(--main-color)] shadow-lg shadow-[#ff1e1e6c]"
          target="_blank"
        >
          View on Github
        </a>
        <a
          href={urlWeb}
          className="bg-[var(--main-color)] p-2 text-[12px] rounded-md text-white hover:bg-transparent border-[var(--main-color)] border-1 duration-[.5s] text-bold hover:text-[var(--main-color)] shadow-lg shadow-[#ff1e1e6c]"
          target="_blank"
        >
          View on Web
        </a>
      </div>
    </div>
  );
};

export default PortfolioBox;
