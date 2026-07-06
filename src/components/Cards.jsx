import Button from "./Buttons";

function Card({
  title,
  monthlyPrice,
  yearlyPrice,
  features,
  buttonText,
  popularm,
  populary,
  urplan,
}) {
  const price = urplan === "monthly" ? monthlyPrice : yearlyPrice;

  const popular = urplan === "monthly" ? popularm : populary;

  return (
    <div className="relative flex flex-col bg-[#0B1220] text-white rounded-2xl p-6 w-72 border">
      {popular && (
        <p className="border-green-400 absolute top-0 left-0 w-full bg-green-400 text-black text-center rounded-t-2xl py-1 text-sm font-bold">
          Most-Popular
        </p>
      )}

      <h2 className="text-2xl font-bold mt-2">{title}</h2>

      <p className="text-4xl mt-2">
        ${price}
        <span className="text-sm font-normal text-gray-400 px-1 py-1">
          / {urplan === "monthly" ? "month" : "year"}
        </span>
      </p>

      <ul className="mt-2 space-y-1 px-1 py-1 mb-4">
        {features.map((feature, index) => (
          <li key={index}>✅ {feature}</li>
        ))}
      </ul>

      <Button
        className={`mt-auto rounded py-2 w-full font-semibold transition ${
          popular
            ? "bg-green-400 text-black hover:bg-green-300"
            : "border border-green-400 text-white hover:bg-green-400 hover:text-black"
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
}

function Cards({ urplan }) {
  return (
    <>
      <div className="flex gap-6 justify-center mt-10">
        <Card
          title="Basic"
          monthlyPrice="5.99"
          yearlyPrice="50"
          urplan={urplan}
          features={["Watch on 1 device", "HD quality", "Download on 1 device"]}
          buttonText="Choose Basic"
          popularm={false}
          populary={true}
        />

        <Card
          title="Standard"
          monthlyPrice="9.99"
          yearlyPrice="70"
          urplan={urplan}
          features={[
            "Watch on 2 devices",
            "Full HD quality",
            "Download on 2 devices",
            "Ad-free experience",
          ]}
          buttonText="Choose Standard"
          popularm={true}
          populary={false}
        />

        <Card
          title="Premium"
          monthlyPrice="13.99"
          yearlyPrice="90"
          urplan={urplan}
          features={[
            "Watch on 4 devices",
            "4K Ultra HD quality",
            "Download on 4 devices",
          ]}
          buttonText="Choose Premium"
          popularm={false}
          populary={false}
        />
      </div>

      <div className="flex gap-2 text-white font-sans justify-center mt-5 items-center">
        <img src="/logo.png" alt="Streamify-logo" className="w-10 h-10" />
        <p>Secure Payments . Cancel Anytime</p>
      </div>
    </>
  );
}

export default Cards;
