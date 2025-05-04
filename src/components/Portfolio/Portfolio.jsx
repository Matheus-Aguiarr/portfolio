import "./Portfolio.css";
import ShinyText from "../../Animations/ShinyText.jsx";
import siteVint from "../../assets/sitevint.png";
import sitePadaria from "../../assets/sitepadaria.png";
import apiStudents from "../../assets/alunoAPIImage.png";
import PortfolioBox from "../PortfolioBox/PortfolioBox.jsx";

const Portfolio = ({ onClick }) => {
  const projects = [
    {
      img: siteVint,
      name: "Landing Page",
      technologies: "HTML, CSS, JS",
      description:
        "I made this website for a energy company owner who were needing more qualified leads",
      urlGit: "https://github.com/Matheus-Aguiarr/vinteficienciaenergetica",
      urlWeb: "https://vinteficienciaenergetica.com.br",
    },
    {
      img: sitePadaria,
      name: "Landing Page",
      technologies: "React, Tailwind",
      description:
        "I made this website for a bakery owner who were needing more qualified leads",
      urlGit: "https://github.com/Matheus-Aguiarr/padaria-cecap",
      urlWeb: "https://padaria-cecap.vercel.app",
    },
    {
      img: apiStudents,
      name: "API Management Students",
      technologies: "Java, SpringBoot, PostgreSQL",
      description:
        "That's my first API, I made it to manage students and their grades",
      urlGit: "https://github.com/Matheus-Aguiarr/cadastro-alunos-api",
      urlWeb: "https://github.com/Matheus-Aguiarr/cadastro-alunos-api",
    },
  ];

  return (
    <div id="portfolio" className="mb-[50px] mt-[300px]" onClick={onClick}>
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
          text="In 2024 I started doing freelances as a web developer. These are my already done freelances and personal projects:"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </p>
      <div className="portfolio-container flex flex-row justify-center mt-4 gap-[25px]">
        {projects.map((project) => {
          return (
            <PortfolioBox
              key={project.name}
              name={project.name}
              technologies={project.technologies}
              description={project.description}
              img={project.img}
              urlGit={project.urlGit}
              urlWeb={project.urlWeb}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
