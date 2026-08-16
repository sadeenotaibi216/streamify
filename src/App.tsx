import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./store/ThemeSlice";
import { toggleLanguage } from "./store/ LanguageSlice";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import Placeholder from "./pages/PlaceHolder";
import SignIn from "./pages/SignIn";
import Movies from "./pages/Movies";
import MyList from "./pages/MyList";

function App() {
  const [user, setUser] = useState<{
    username: string;
    email: string;
  } | null>(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const theme = useSelector(
    (state: { theme: { theme: "light" | "dark" } }) => {
      return state.theme.theme;
    }
  );

  const language = useSelector(
    (state: { language: { language: "en" | "ar" } }) => {
      return state.language.language;
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.username) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  console.log(user);

  function handleSignOut() {
    setUser(null);
    localStorage.removeItem("user");
  }

  function handleToggleTheme() {
    dispatch(toggleTheme());
  }

  function handleToggleLanguage() {
    dispatch(toggleLanguage());
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-black transition-colors dark:bg-black dark:text-white">
      <Header
        user={user}
        theme={theme}
        language={language}
        onSignOut={handleSignOut}
        onToggleTheme={handleToggleTheme}
        onToggleLanguage={handleToggleLanguage}
      />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                user={user}
                language={language}
                theme={theme}
              />
            }
          />

          <Route
            path="/tv-shows"
            element={
              <Placeholder
                title="TV Shows Page"
                theme={theme}
              />
            }
          />

          <Route
            path="/Movies"
            element={<Movies theme={theme} />}
          />

          <Route
            path="/kids"
            element={
              <Placeholder
                title="Kids Page"
                theme={theme}
              />
            }
          />

          <Route
            path="/my-list"
            element={<MyList theme={theme} />}
          />

          <Route
            path="/contact"
            element={<ContactUs theme={theme} />}
          />

          <Route
            path="/signin"
            element={
              <SignIn
                onSignIn={setUser}
                theme={theme}
              />
            }
          />

          <Route
            path="/search"
            element={
              <Placeholder
                title="Search Page"
                theme={theme}
              />
            }
          />

          <Route
            path="/free-trial"
            element={
              <Placeholder
                title="Free Trial Page"
                theme={theme}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;