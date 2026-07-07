function FeatureItem({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="flex items-center gap-3 w-full sm:w-[45%] lg:w-[22%]">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-14 h-14 md:w-20 md:h-20"
      />

      <div>
        <p className="text-white text-base md:text-xl font-semibold">
          {title}
        </p>

        <p className="text-gray-400 text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

function MiddlePart() {
  return (
    <div className="text-white py-10 bg-[#020710]">
      <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">
        Why Streamify?
      </h1>

      <div className="flex flex-wrap justify-center lg:justify-between gap-6 px-6 md:px-16">
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