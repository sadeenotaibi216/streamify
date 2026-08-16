import { useState } from "react";
import { useSelector } from "react-redux";

function FAQItem(
  { question, answer }: { question: string; answer: string }
) {
  const [open, setOpen] = useState(false);

  function toggleFAQ() {
    setOpen((previousOpen) => !previousOpen);
  }

  const theme = useSelector(
    (state: { theme: { theme: string } }) => state.theme.theme
  );

  return (
    <div
      onClick={toggleFAQ}
      className={`cursor-pointer rounded-xl border-2 px-4 py-4 transition md:px-6 ${
        theme === "light"
          ? "border-gray-300 bg-white text-black shadow-md hover:bg-gray-100"
          : "border-green-400 bg-[#172033] text-white hover:bg-[#1E293B]"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold md:text-lg">{question}</p>

        <span className="shrink-0 text-2xl font-bold text-green-400 md:text-3xl">
          {open ? "−" : "+"}
        </span>
      </div>

      {open && (
        <p
          className={`mt-3 border-t pt-3 text-sm md:text-base ${
            theme === "light"
              ? "border-gray-300 text-gray-600"
              : "border-gray-600 text-gray-300"
          }`}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

function FAQ() {
  const questions = [
    {
      question: "What devices can I use to watch Streamify?",
      answer:
        "You can watch Streamify on your phone, laptop, tablet, and smart TV.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription anytime with no extra fees.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, Streamify offers a free trial for new users.",
    },
    {
      question: "How many devices can I watch on?",
      answer:
        "It depends on your plan. Basic allows 1 device, Standard allows 2, and Premium allows 4.",
    },
  ];

  return (
    <section className="mx-auto mt-5 w-full max-w-3xl px-4 md:mt-10 md:max-w-5xl">
      <h1 className="mb-3 text-center text-2xl font-bold text-white md:mb-6 md:text-4xl">
        Frequently Asked Questions
      </h1>

      <div className="space-y-3">
        {questions.map((item) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQ;