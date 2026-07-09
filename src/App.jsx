import "./App.css";
import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import Placeholder from "./pages/Placeholder";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/tv-shows"
          element={<Placeholder title="TV Shows Page" />}
        />
        <Route
          path="/movies"
          element={<Placeholder title="Movies Page" />}
        />
        <Route path="/kids" element={<Placeholder title="Kids Page" />} />
        <Route
          path="/my-list"
          element={<Placeholder title="My List Page" />}
        />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
