import "./Portfolio.css";
import ShinyText from "../../Animations/ShinyText.jsx";

const Portfolio = () => {
  return (
    <div>
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
    </div>
  );
};

export default Portfolio;
