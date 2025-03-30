import "./App.css";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="bg-[var(--bg-color)] h-[100vh]">
      <Header />
      <Home />
    </div>
  );
}

export default App;
