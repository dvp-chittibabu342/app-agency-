"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a project take?",
      answer:
        "Most projects take between 2–6 weeks depending on complexity.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Yes. We specialize in helping startups build and launch digital products.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern stacks like Next.js, React, Node.js, and cloud services.",
    },
    {
      question: "Can you redesign an existing product?",
      answer:
        "Yes. We improve UX, performance, and modernize existing platforms.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl overflow-hidden"
            >

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}