function Button({ children, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`font-semibold cursor-pointer hover:text-green-400 ${className}`}
    >
      {children}
    </button>
  );
}

function Header() {
  return (
    <div className="bg-black text-white flex items-center justify-between px-8 py-4">
      
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Streamify-logo" className="w-10 h-10" />
        <span className="text-2xl font-semibold font-sans">Streamify</span>
      </div>

      <div className="flex items-center gap-6 text-l">
        <Button>Home</Button>
        <Button>TV Shows</Button>
        <Button>Movies</Button>
        <Button>Kids</Button>
        <Button>My List</Button>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <Button className="text-xl">🔍</Button>

        <Button className="border border-gray-600 px-5 py-2 rounded-lg hover:border-white">
          Sign In
        </Button>

        <Button className="bg-green-400 text-black px-5 py-2 rounded-lg hover:bg-green-300 hover:text-black">
          Start Free Trial
        </Button>
      </div>

    </div>
  );
}

export default Header;