import Button from "./Buttons";


function Header() {
  const navButtons = ["Home", "TV Shows", "Movies", "Kids", "My List"];

  const actionButtons = [
    {
      text: "🔍",
      className: "text-xl",
    },
    {
      text: "Sign In",
      className:
        "border border-gray-600 px-5 py-2 rounded-lg hover:border-white",
    },
    {
      text: "Start Free Trial",
      className:
        "bg-green-400 text-black px-5 py-2 rounded-lg hover:bg-green-300 hover:text-black",
    },
  ];

  return (
    <div className="bg-black text-white flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Streamify-logo" className="w-10 h-10" />
        <span className="text-2xl font-semibold font-sans">Streamify</span>
      </div>

      <div className="flex items-center gap-6 text-lg">
        {navButtons.map((button) => (
          <Button key={button}>{button}</Button>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm">
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
