import { useState } from "react";
import Button from "./Buttons";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#0B1220] text-white rounded-xl px-4 md:px-6 py-4">
      <div className="flex justify-between items-center gap-4">
        <p className="text-sm md:text-lg font-semibold">{question}</p>

        <Button
          onClick={() => setOpen(!open)}
          className="text-2xl md:text-3xl px-2 py-0 flex-shrink-0"
        >
          {open ? "-" : "+"}
        </Button>
      </div>

      {open && (
        <p className="mt-3 text-gray-400 text-sm md:text-base">{answer}</p>
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
    <div className="mt-5 md:mt-10 w-full max-w-3xl md:max-w-5xl mx-auto px-4">
      <h1 className="text-white text-2xl md:text-4xl font-bold text-center mb-3 md:mb-6">
        Frequently Asked Questions
      </h1>

      <div className="space-y-3">
        {questions.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
