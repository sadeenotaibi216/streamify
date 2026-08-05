import Button from "./Buttons";

function Hero({theme}) {
  return (

      //  className={`min-h-screen transition-colors ${
      //   theme === "dark"
      //     ? "bg-black text-white"
      //     : "bg-slate-100 text-black"
      // }`}
  <div
  className={`min-h-[55vh] flex flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row md:px-16 ${
    theme === "dark"
      ? "bg-black text-white"
      : "bg-white text-black"
  }`}
>
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-sans font-bold  pt-2 pb-2">
          Unlimited Stories. <br />
          Anywhere, Anytime.
        </h1>

        <p className="text-sm md:text-xl font-sans pt-2 pb-2">
          Stream thousands of movies, TV shows and{" "}
          <br className="hidden md:block" />
          exclusive originals in HD and 4K.
        </p>

        <div className="flex justify-center md:justify-start items-center gap-4 pt-5 pb-5 flex-wrap">
          <Button className="bg-green-400 text-black px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg rounded-lg font-semibold hover:bg-green-300">
            Start Free Trial
          </Button>

          <Button className="border border-green-400 px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg rounded-lg font-semibold hover:bg-green-400 hover:text-black">
            Watch Trailer
          </Button>
        </div>

        <div className="flex justify-center md:justify-start items-center gap-2 pt-5 pb-5">
          <img
            src="/green.png"
            alt="green logo"
            className="w-4 h-4 md:w-6 md:h-6"
          />
          <p className="text-sm font-sans">
            Cancel anytime. First 7 days free.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
        <img
          src="/hero.png"
          alt="hero logo"
          className="w-full max-w-[450px] md:max-w-full object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
