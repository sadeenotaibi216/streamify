import { useState } from "react";
import Cards from "./Cards";
import Button from "./Buttons";

function Plan({theme}) {
  const [userPlan, setUserPlan] = useState("monthly");

  return (
    <>
      <h1 className={` text-3xl md:text-4xl font-bold text-center mb-8 px-4 md:px-8 py-8 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}>
        Choose Your Plan
      </h1>

      <div className="relative flex justify-center items-center rounded-full border border-gray-700 bg-[#0B1220] w-[280px] md:w-[360px] h-14 mx-auto p-1">
        <Button
          onClick={() => setUserPlan("monthly")}
          className={`w-1/2 h-full rounded-full text-sm md:text-lg font-sans font-semibold ${
            userPlan === "monthly" ? "bg-green-400 text-black" : "text-white"
          }`}
        >
          Monthly
        </Button>

        <Button
          onClick={() => setUserPlan("yearly")}
          className={`w-1/2 h-full rounded-full text-sm md:text-lg font-sans font-semibold ${
            userPlan === "yearly" ? "bg-green-400 text-black" : "text-white"
          }`}
        >
          Yearly
        </Button>

        <Button className="absolute right-[-25px] md:right-[-38px] top-1/2 -translate-y-1/2 bg-green-400 text-black text-xs md:text-sm font-sans rounded-full px-2 md:px-3 py-1">
          Save 20%
        </Button>
      </div>

      <Cards userPlan={userPlan} />
    </>
  );
}

export default Plan;
