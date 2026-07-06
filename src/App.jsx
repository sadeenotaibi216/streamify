import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";


function App() {
  return (
    <>
       <div className="min-h-screen bg-black text-white">
      <Header />
      <Cards/>

    </div>
    </>
  );
}

export default App;