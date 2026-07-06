
function FeatureItem({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="flex items-center gap-3 flex-1 max-w-[260px]">
      <img src={imgSrc} alt={imgAlt} className="w-20 h-20" />

      <div className="max-w-[170px]">
        <p className="text-white text-xl font-semibold">{title}</p>
        <p className="text-gray-600 text-l">{description}</p>
      </div>
    </div>
  );
}

function MiddlePart() {
  return (
    <div className="text-white py-10 bg-[#020710]">
      <h1 className="text-white text-4xl font-bold text-center mb-8">
        Why Streamify?
      </h1>

      <div className="flex items-center justify-between gap-8 px-16">
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
