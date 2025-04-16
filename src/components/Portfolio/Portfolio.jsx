import "./Portfolio.css";
import ShinyText from "../../Animations/ShinyText.jsx";

const Portfolio = () => {
  return (
    <div id="portfolio" className="mb-[50px] mt-[300px]">
      <h1 className="text-white text-[32px] text-center">
        My <span className="text-[var(--main-color)]">Portfolio</span>
      </h1>
      <p className="text-center">
        <ShinyText
          text="Experience: "
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </p>
      <p className="text-center ">
        <ShinyText
          text="In 2024 I started doing freelances as a web developer. These are my already done projects:"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </p>
      <div className="portfolio-container">
        <div className="portfolioBox bg-[var(--bg-color03)] w-[250px] flex flex-col">
          <img src="" alt="" />
          <h2>
            Landing Page - <span>HTML, CSS, JS</span>
          </h2>
          <div>
            <a href="">View on Github</a>
            <a href="">View on Web</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
