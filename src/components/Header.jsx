import { NavLink } from "react-router";
import Button from "./Buttons";

function Header() {
  const navButtons = [
    { text: "Home", path: "/" },
    { text: "TV Shows", path: "/tv-shows" },
    { text: "Movies", path: "/movies" },
    { text: "Kids", path: "/kids" },
    { text: "My List", path: "/my-list" },
  ];

  const actionButtons = [
    {
      text: "🔍",
      className: "text-xl",
    },
    {
      text: "Sign In",
      className:
        "border border-gray-600 px-4 py-2 rounded-lg hover:border-white",
    },
    {
      text: "Start Free Trial",
      className:
        "bg-green-400 text-black px-4 py-2 rounded-lg hover:bg-green-300 hover:text-black",
    },
  ];

  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 gap-4">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Streamify-logo" className="w-10 h-10" />
        <span className="text-2xl font-semibold font-sans">Streamify</span>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-sm md:text-lg">
        {navButtons.map((button) => (
          <NavLink
            key={button.text}
            to={button.path}
            end={button.path === "/"}
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "text-white hover:text-green-400"
            }
          >
            {button.text}
          </NavLink>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-sm">
        {actionButtons.map((button) => (
          <Button key={button.text} className={button.className}>
            {button.text}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Header;