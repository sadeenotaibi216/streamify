function FeatureItem({
  imgSrc,
  imgAlt,
  title,
  description,
}) {
  return (
    <div className="flex w-full items-center gap-3 sm:w-[45%] lg:w-[22%]">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="h-14 w-14 md:h-20 md:w-20"
      />

      <div>
        <p className="text-base font-semibold md:text-xl">
          {title}
        </p>

        <p className="text-sm opacity-70 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

function MiddlePart({ theme }) {
  return (
    <div
      className={`py-10 ${
        theme === "dark"
          ? "bg-[#020710] text-white"
          : "bg-white text-black"
      }`}
    >
      <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        Why Streamify?
      </h1>

      <div className="flex flex-wrap justify-center gap-6 px-6 md:px-16 lg:justify-between">
        <FeatureItem
          imgSrc="/6.png"
          imgAlt="Thousands of titles"
          title="Thousands of titles"
          description="Enjoy a wide variety of movies, shows and more."
        />

        <FeatureItem
          imgSrc="/7.png"
          imgAlt="Watch anywhere"
          title="Watch anywhere"
          description="Watch your favorites offline, anytime."
        />

        <FeatureItem
          imgSrc="/8.png"
          imgAlt="Multiple Profiles"
          title="Multiple Profiles"
          description="Create up to 5 profiles for your family."
        />

        <FeatureItem
          imgSrc="/9.png"
          imgAlt="High quality streaming"
          title="High quality streaming"
          description="Experience in HD and 4K on any device."
        />
      </div>
    </div>
  );
}

export default MiddlePart;