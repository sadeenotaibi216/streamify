import Button from "./Buttons.js";
import { useSelector } from "react-redux";

function Card(
  {
    title,
    monthlyPrice,
    yearlyPrice,
    features,
    buttonText,
    popularm,
    populary,
    userPlan,
  }: {
    title: string;
    monthlyPrice: string;
    yearlyPrice: string;
    features: string[];
    buttonText: string;
    popularm: boolean;
    populary: boolean;
    userPlan: string;
  }
) {
  const price = userPlan === "monthly" ? monthlyPrice : yearlyPrice;

  const popular = userPlan === "monthly" ? popularm : populary;

  const theme = useSelector(
    (state: { theme: { theme: string } }) => state.theme.theme
  );

  return (
    <div
      className={`relative flex min-h-[310px] flex-col rounded-xl border p-5 md:p-6 ${
        theme === "light"
          ? "border-gray-300 bg-white text-black shadow-md"
          : "border-gray-400 bg-[#0b1220] text-white"
      }`}
    >
      {popular && (
        <p className="border-green-400 absolute top-0 left-0 w-full bg-green-400 text-black text-center rounded-t-2xl py-1 text-sm font-bold">
          Most-Popular
        </p>
      )}

      <h2 className="text-xl md:text-2xl font-bold mt-4">{title}</h2>

      <p className="text-2xl md:text-4xl mt-2">
        ${price}
        <span className="text-sm font-normal text-gray-400 px-1 py-1">
          / {userPlan === "monthly" ? "month" : "year"}
        </span>
      </p>

      <ul className="mt-2 space-y-1 px-1 py-1 mb-4 text-sm md:text-base">
        {features.map((feature, index) => (
          <li key={index}>✅ {feature}</li>
        ))}
      </ul>

      <Button
        className={`mt-auto w-full rounded py-2 font-semibold transition ${
          popular
            ? "bg-green-400 text-black hover:bg-green-300"
            : theme === "light"
              ? "border-2 border-green-400 text-black hover:bg-green-400 hover:text-black"
              : "border-2 border-green-400 text-white hover:bg-green-400 hover:text-black"
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
}

function Cards({ userPlan }: { userPlan: string }) {
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center mt-10 px-4">
        <Card
          title="Basic"
          monthlyPrice="5.99"
          yearlyPrice="50"
          userPlan={userPlan}
          features={[
            "Watch on 1 device",
            "HD quality",
            "Download on 1 device",
          ]}
          buttonText="Choose Basic"
          popularm={false}
          populary={true}
        />

        <Card
          title="Standard"
          monthlyPrice="9.99"
          yearlyPrice="70"
          userPlan={userPlan}
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
          userPlan={userPlan}
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
    </>
  );
}

export default Cards;