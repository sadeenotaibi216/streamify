import { useState } from "react";
import Cards from "./Cards";
import Button from "./Buttons";

function Plan({ theme }) {
  const [userPlan, setUserPlan] = useState("monthly");

  return (
    <>
      <h1
        className={`mb-8 px-4 py-8 text-center text-3xl font-bold md:px-8 md:text-4xl ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        Choose Your Plan
      </h1>

      <div className="relative mx-auto flex h-14 w-[280px] items-center justify-center rounded-full border border-gray-700 bg-[#0B1220] p-1 md:w-[360px]">
        <Button
          onClick={() => setUserPlan("monthly")}
          className={`h-full w-1/2 cursor-pointer rounded-full font-sans text-sm font-semibold transition duration-200 md:text-lg ${
            userPlan === "monthly"
              ? "bg-green-400 text-black hover:bg-green-300"
              : "text-white hover:bg-green-300 hover:text-black"
          }`}
        >
          Monthly
        </Button>

        <Button
          onClick={() => setUserPlan("yearly")}
          className={`h-full w-1/2 cursor-pointer rounded-full font-sans text-sm font-semibold transition duration-200 md:text-lg ${
            userPlan === "yearly"
              ? "bg-green-400 text-black hover:bg-green-300"
              : "text-white hover:bg-green-400 hover:text-black"
          }`}
        >
          Yearly
        </Button>

        <Button
          className={`absolute right-[-25px] top-1/2 -translate-y-1/2 rounded-full bg-green-400 px-2 py-1 font-sans text-xs text-black transition-shadow duration-300 md:right-[-38px] md:px-3 md:text-sm ${
            userPlan === "yearly"
              ? "shadow-[0_6px_16px_rgba(74,222,128,0.65)]"
              : "shadow-none"
          }`}
        >
          Save 20%
        </Button>
      </div>

      <Cards userPlan={userPlan} theme={theme} />
    </>
  );
}

export default Plan;
