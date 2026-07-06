import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

import Hero from "./components/Hero";
import Middlepart from "./components/middlepart";
import Plan from "./components/plan";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Cards />
      <Hero />
      <Middlepart />
      <Plan />
    </div>
  );
}

export default App;
