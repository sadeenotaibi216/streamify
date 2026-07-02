function Header() {
  return (
    <div className="bg-black text-white flex items-center justify-between px-8 py-4">
      
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Streamify-logo" className="w-10 h-10" />
        <span className="text-2xl font-semibold font-sans">Streamify</span>
      </div>

      <div className="flex items-center gap-6 text-l">
        <button className="font-semibold hover:text-green-400">Home</button>
        <button className="font-semibold hover:text-green-400">TV Shows</button>
        <button className="font-semibold hover:text-green-400">Movies</button>
        <button className="font-semibold hover:text-green-400">Kids</button>
        <button className="font-semibold hover:text-green-400">My List</button>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <button className="text-xl font-semibold hover:text-green-400">🔍</button>

        <button className="border font-semibold border-gray-600 px-5 py-2 rounded-lg hover:border-white">
          Sign In
        </button>

        <button className="bg-green-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-green-300">
          Start Free Trial
        </button>
      </div>

    </div>
  );
}

export default Header;