import { useState } from "react";
import Cards from "./Cards";
import Button from "./Buttons";

function Plan() {
  const [urplan, setPlan] = useState("monthly");

  return (
    <>
      <h1 className="text-white text-4xl font-bold text-center mb-8 px-8 py-8">
        Choose Your Plan
      </h1>

      <div className="relative flex justify-center items-center rounded-full border border-gray-700 bg-[#0B1220] w-[360px] h-14 mx-auto p-1">
        <Button
          onClick={() => setPlan("monthly")}
          className={`w-1/2 h-full rounded-full text-lg font-sans font-semibold ${
            urplan === "monthly" ? "bg-green-400 text-black" : "text-white"
          }`}
        >
          Monthly
        </Button>

        <Button
          onClick={() => setPlan("yearly")}
          className={`w-1/2 h-full rounded-full text-lg font-sans font-semibold ${
            urplan === "yearly" ? "bg-green-400 text-black" : "text-white"
          }`}
        >
          Yearly
        </Button>

        <Button className="absolute right-[-38px] top-1/2 -translate-y-1/2 bg-green-400 text-black text-sm font-sans rounded-full px-3 py-1">
          Save 20%
        </Button>
      </div>

      <Cards urplan={urplan} />
    </>
  );
}

export default Plan;
