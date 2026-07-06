import "./App.css";

import Header from "./components/Header";
import Faq from "./components/faq";
import Hero from "./components/Hero";
import Middlepart from "./components/middlepart";
import Plan from "./components/plan";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
     
      <Hero />
      <Middlepart />

      <Plan />
      
       <Faq/>
          <Footer/>
    </div>
  );
}

export default App;
