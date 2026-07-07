import "./App.css";
import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";

function TestPage({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center text-4xl font-bold text-white">
      {title}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tv-shows" element={<TestPage title="TV Shows Page" />} />
        <Route path="/movies" element={<TestPage title="Movies Page" />} />
        <Route path="/kids" element={<TestPage title="Kids Page" />} />
        <Route path="/my-list" element={<TestPage title="My List Page" />} />
               <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
