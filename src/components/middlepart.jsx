function Middlepart() {
  return (
    <div className=" text-white py-10 bg-[#020710]">
      <h1 className="text-white text-4xl font-bold text-center mb-8">
        Why Streamify?
      </h1>

      <div className="flex items-center justify-center gap-20">
        <div className="flex items-center gap-3">
          <img src="/6.png" alt="Thousands of titles" className="w-20 h-20" />
          <div>
            <p className="text-white text-xl font-semibold">Thousands of titles</p>
            <p className="text-white text-l">
              Enjoy a wide variety of movies,<br /> shows and more.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img src="/7.png" alt="Watch anywhere" className="w-20 h-20" />
          <div>
            <p className="text-white text-xl font-semibold">Watch anywhere</p>
            <p className="text-white text-l">
              Watch your favorites <br /> offline, anytime.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img src="/8.png" alt="Multiple Profiles" className="w-20 h-20" />
          <div>
            <p className="text-white text-xl font-semibold">Multiple Profiles</p>
            <p className="text-white text-l">
              Create up to 5 profiles<br /> for your family.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img src="/9.png" alt="High quality streaming" className="w-20 h-20" />
          <div>
            <p className="text-white text-xl font-semibold">High quality streaming</p>
            <p className="text-white text-l">
              Experience in HD and <br />4K on any device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middlepart;