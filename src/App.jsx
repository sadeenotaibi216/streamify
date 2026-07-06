import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Middlepart from "./components/middlepart";
import Plan from "./components/plan";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Middlepart />
      <Plan />
    </div>
  );
}

export default App;
