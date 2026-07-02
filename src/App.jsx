import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/footer";

function App() {
  return (
    <>
       <div className="min-h-screen bg-black text-white">
      <Header />
      <Cards/>
   <Footer/>
    </div>
    </>
  );
}

export default App;