import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import Placeholder from "./pages/Placeholder";
import SignIn from "./pages/SignIn";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      return null;
    }

  });

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme === "light" ? "light" : "dark";
  });

  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");

    return savedLanguage === "ar" ? "ar" : "en";
  });

  useEffect(() => {
    if (user && user.username) {
      localStorage.setItem("user", JSON.stringify(user));
    } 
  }, [user]);

 useEffect(() => {
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);

    document.documentElement.lang = language;
    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";
  }, [language]);

  function handleSignOut() {
    setUser(null);
  }

  function toggleTheme() {
    setTheme((previousTheme) =>
      previousTheme === "dark" ? "light" : "dark",
    );
  }

  function toggleLanguage() {
    setLanguage((previousLanguage) =>
      previousLanguage === "en" ? "ar" : "en",
    );
  }

  return (
    <div className="min-h-screen bg-white text-black transition-colors dark:bg-black dark:text-white">
      <Header
        user={user}
        theme={theme}
        language={language}
        onSignOut={handleSignOut}
        onToggleTheme={toggleTheme}
        onToggleLanguage={toggleLanguage}
      />

      <Routes>
        <Route
          path="/"
          element={<HomePage user={user} language={language} />}
        />

        <Route
          path="/tv-shows"
          element={<Placeholder title="TV Shows Page" />}
        />

        <Route
          path="/movies"
          element={<Placeholder title="Movies Page" />}
        />

        <Route
          path="/kids"
          element={<Placeholder title="Kids Page" />}
        />

        <Route
          path="/my-list"
          element={<Placeholder title="My List Page" />}
        />

        <Route path="/contact" element={<ContactUs />} />

        <Route
          path="/signin"
          element={
            <SignIn onSignIn={setUser} language={language} />
          }
        />

        <Route
          path="/search"
          element={<Placeholder title="Search Page" />}
        />

        <Route
          path="/free-trial"
          element={<Placeholder title="Free Trial Page" />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;