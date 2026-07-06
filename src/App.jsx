import "./App.css";

import Header from "./components/Header";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Middlepart from "./components/MiddlePart";
import Plan from "./components/Plan";
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
