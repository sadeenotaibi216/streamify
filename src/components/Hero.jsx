import Button from "./Buttons";
function Hero() {
  return (
    <div className="min-h-[55vh] bg-black text-white flex items-center justify-between px-16">
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-5xl font-sans font-bold text-white pt-2 pb-2">
          Unlimited Stories. <br />
          Anywhere, Anytime.
        </h1>

        <p className="text-xl font-sans text-white pt-2 pb-2">
          Stream thousands of movies, TV shows and <br />
          exclusive originals in HD and 4K.
        </p>

        <div className="flex items-center text-white gap-4 pt-5 pb-5">
          <Button className="bg-green-400 text-black px-8 py-4 text-lg rounded-lg font-semibold hover:bg-green-300">
            Start Free Trial
          </Button>

          <Button className="bg-green-400 text-black px-8 py-4 text-lg rounded-lg font-semibold hover:bg-green-300">
            Watch Trailer
          </Button>
        </div>

        <div className="flex items-center gap-2 pt-5 pb-5">
          <img src="/green.png" alt="green logo" className="w-6 h-6" />
          <p className="text-sm text-white font-sans">
            Cancel anytime. First 7 days free.
          </p>
        </div>
      </div>

      <div className="w-1/2 max-w-[80%] aspect-video flex items-center justify-end pt-5 pb-5 text-red">
        <img
          src="/hero.png"
          alt="hero logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
