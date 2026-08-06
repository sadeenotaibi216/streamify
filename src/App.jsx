import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./store/themeSlice";
import { toggleLanguage } from "./store/languageSlice";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import Placeholder from "./pages/Placeholder";
import SignIn from "./pages/SignIn";
import Movies from "./pages/Movies";
function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  // const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const theme = useSelector((state) => {
    return state.theme.theme;
  });
  // const [language, setLanguage] = useState(localStorage.getItem("language"));
  const language = useSelector((state) => {
    return state.language.language;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.username) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    if (theme === "dark") {
      // localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      // localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    // localStorage.setItem("language", language);

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  function handleSignOut() {
    setUser(null);
  }

  // function toggleTheme() {
  //   // setTheme((previousTheme) => (previousTheme === "dark" ? "light" : "dark"));
  //   // setTheme(theme === "dark" ? "light" : "dark");
  // }
  function handleToggleTheme() {
    dispatch(toggleTheme());
  }

  function handleToggleLanguage() {
    dispatch(toggleLanguage());
  }

  return (
    <div className="min-h-screen bg-white text-black transition-colors dark:bg-black dark:text-white">
      <Header
        user={user}
        theme={theme}
        language={language}
        onSignOut={handleSignOut}
        onToggleTheme={handleToggleTheme}
        onToggleLanguage={handleToggleLanguage}
      />

      <Routes>
        <Route
          path="/"
          element={<HomePage user={user} language={language} theme={theme} />}
        />

        <Route
          path="/tv-shows"
          element={<Placeholder title="TV Shows Page" />}
        />

        <Route path="/Movies" element={<Movies theme={theme} />} />

        <Route path="/kids" element={<Placeholder title="Kids Page" />} />

        <Route path="/my-list" element={<Placeholder title="My List Page" />} />

        <Route path="/contact" element={<ContactUs theme={theme} />} />

        <Route
          path="/signin"
          element={
            <SignIn onSignIn={setUser} language={language} theme={theme} />
          }
        />

        <Route path="/search" element={<Placeholder title="Search Page" />} />

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
