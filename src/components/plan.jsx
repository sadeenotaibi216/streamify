function Plan() {
  return (
    <>
      <h1 className="text-white text-4xl font-bold text-center mb-8 px-8 py-8">
        Choose Your Plan
      </h1>

      <div className="relative flex justify-center items-center rounded-full border border-gray-700 bg-[#0B1220] w-[500px] h-20 mx-auto p-1">
        <button className="w-1/2 h-full rounded-full bg-green-400 text-black text-2xl font-sans px-16 py-4">
          Monthly
        </button>

        <button className="w-1/2 rounded-full text-white text-2xl font-sans px-16 py-4">
          Yearly
        </button>

        <button className="absolute right-[-45px] top-1/2 -translate-y-1/2 bg-green-400 text-black text-lg font-sans rounded-full px-5 py-2">
          Save 20%
        </button>
      </div>
    </>
  );
}

export default Plan;