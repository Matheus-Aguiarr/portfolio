import "./App.css";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Skills from "./components/Skills/Skills.jsx";

function App() {
  return (
    <div className="bg-[var(--bg-color)] ">
      <Header />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
