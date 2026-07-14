import { NavLink } from "react-router";

function Header({
  user,
  theme,
  language,
  onSignOut,
  onToggleTheme,
  onToggleLanguage,
}) {
  const navButtons =
    language === "en"
      ? [
          { text: "Home", path: "/" },
          { text: "TV Shows", path: "/tv-shows" },
          { text: "Movies", path: "/movies" },
          { text: "Kids", path: "/kids" },
          { text: "My List", path: "/my-list" },
        ]
      : [
          { text: "الرئيسية", path: "/" },
          { text: "المسلسلات", path: "/tv-shows" },
          { text: "الأفلام", path: "/movies" },
          { text: "الأطفال", path: "/kids" },
          { text: "قائمتي", path: "/my-list" },
        ];

  return (
 <header
  className={`flex flex-col items-center justify-between gap-4 border-b px-4 py-4 transition-colors md:flex-row md:px-8 ${
    theme === "dark"
      ? "border-gray-800 bg-black text-white"
      : "border-gray-300 bg-white text-black"
  }`}
>
      <NavLink to="/" className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Streamify logo"
          className="h-10 w-10"
        />

        <span className="text-2xl font-semibold">
          Streamify
        </span>
      </NavLink>

      <nav className="flex flex-wrap items-center justify-center gap-3 text-sm md:gap-6 md:text-lg">
        {navButtons.map((button) => (
          <NavLink
            key={button.path}
            to={button.path}
            end={button.path === "/"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-green-400"
                : "hover:text-green-400"
            }
          >
            {button.text}
          </NavLink>
        ))}
      </nav>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <NavLink
          to="/search"
          className="text-xl hover:text-green-400"
        >
          🔍
        </NavLink>

        <button
          type="button"
          onClick={onToggleTheme}
          className="cursor-pointer rounded-lg border border-gray-400 px-3 py-2 hover:border-green-400 dark:border-gray-600"
        >
          {theme === "dark"
            ? language === "en"
              ? "☀️ Light"
              : "☀️ فاتح"
            : language === "en"
              ? "🌙 Dark"
              : "🌙 داكن"}
        </button>

        <button
          type="button"
          onClick={onToggleLanguage}
          className="cursor-pointer rounded-lg border border-gray-400 px-3 py-2 hover:border-green-400 dark:border-gray-600"
        >
          {language === "en" ? "AR" : "EN"}
        </button>

        {user?.username ? (
          <>
            <div className="rounded-lg bg-gray-100 px-3 py-2 dark:bg-[#0B1220]">
              <span className="text-gray-500 dark:text-gray-400">
                {language === "en" ? "Hi, " : "مرحباً، "}
              </span>

              <span className="font-semibold text-green-500">
                {user.username}
              </span>
            </div>

            <button
              type="button"
              onClick={onSignOut}
              className="cursor-pointer rounded-lg border border-gray-400 px-4 py-2 hover:border-green-400 dark:border-gray-600"
            >
              {language === "en"
                ? "Sign Out"
                : "تسجيل الخروج"}
            </button>
          </>
        ) : (
          <NavLink
            to="/signin"
            className="rounded-lg border border-gray-400 px-4 py-2 hover:border-green-400 dark:border-gray-600"
          >
            {language === "en"
              ? "Sign In"
              : "تسجيل الدخول"}
          </NavLink>
        )}

        <NavLink
          to="/free-trial"
          className="rounded-lg bg-green-400 px-4 py-2 font-semibold text-black hover:bg-green-300"
        >
          {language === "en"
            ? "Start Free Trial"
            : "ابدأ التجربة المجانية"}
        </NavLink>
      </div>
    </header>
  );
}

export default Header;