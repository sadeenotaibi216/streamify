
function email() {
  return (
    <div className="max-w-6xl mx-auto mt-10 bg-gradient-to-r from-[#0B1220] to-green-950 rounded-2xl p-6 flex justify-between items-center">
      
      <div className="flex items-center gap-5">
        <div className="bg-green-400/20 border border-green-400 rounded-2xl p-4">
          <span className="text-green-400 text-4xl">✉️</span>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold">Stay in the loop</h2>
          <p className="text-gray-300 mt-1">
            Get the latest updates, new releases <br />
            and exclusive offers.
          </p>
        </div>
      </div>

      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-[#0B1220] border border-gray-700 text-white px-5 py-3 rounded-l-lg w-80 outline-none"
        />

        <button className="bg-green-400 text-black px-8 py-3 rounded-r-lg font-semibold">
          Subscribe
        </button>
      </div>

    </div>
  );
}

export default email;
