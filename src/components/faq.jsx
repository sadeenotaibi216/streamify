function FAQItem({ question }) {
  return (
    <div className="bg-[#0B1220] text-white rounded-xl px-6 py-4 flex justify-between items-center">
      <p className="text-lg font-semibold">{question}</p>
      <span className="text-3xl">+</span>
    </div>
  );
}

function FAQ() {
  const questions = [
    "What devices can I use to watch Streamify?",
    "Can I cancel my subscription anytime?",
    "Is there a free trial?",
    "How many devices can I watch on?",
  ];

  return (
    <div className="mt-10 w-5xl mx-auto">
      <h1 className="text-white text-4xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h1>

      <div className="space-y-3">
        {questions.map((question, index) => (
          <FAQItem key={index} question={question} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
