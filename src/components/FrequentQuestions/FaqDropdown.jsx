"use client";
import { useState } from "react";

export default function FaqDropdown() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What areas do you currently serve?",
      answer:
        "We currently serve clients across Ontario, including Toronto, Mississauga, Brampton, Waterloo, Hamilton, and surrounding areas. If you’re unsure whether we cover your location, feel free to reach out—we’re always expanding!",
    },
    {
      question: "What’s included in your Move-In Concierge service?",
      answer:
        "Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. We also offer same-day delivery in select metropolitan areas. All orders placed before 2 PM EST are processed the same day.",
    },
    {
      question: "Do you provide packing materials or boxes?",
      answer:
        "Yes! Our customer support team is available 24/7 through live chat, email, and phone. You can reach us at support@example.com or call 1-800-555-0123. We typically respond to emails within 2 hours during business hours.",
    },
    {
      question: "Can I book multiple services at once?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with SSL encryption to protect your financial information.",
    },
    {
      question: "How soon can I schedule a service?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with SSL encryption to protect your financial information.",
    },
    {
      question: "What’s your cancellation or rescheduling policy?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with SSL encryption to protect your financial information.",
    },
    {
      question: "How do I make a payment?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with SSL encryption to protect your financial information.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg  p-6 mx-auto my-8">
      {faqData.map((faq, index) => (
      
        <div key={index} className="faq-item">
          <div
            className="bg-[#E6EEF6] border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-[#cee3f8] transition-colors"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800 w-[207px] md:w-full">
                {faq.question}
              </h3>
              <svg
                className={`w-[28px] h-[28px] rounded-[100%] bg-[#0550A1] text-gray-100 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {/* Added mt-0 to ensure no top margin, and added a conditional mb-4 to separate entire FAQ items */}
            <div className="bg-[#E6EEF6] border-l border-r border-b border-gray-200 rounded-b-lg p-4 text-gray-700">
              <p>{faq.answer}</p>
            </div>
          </div>
          {/* Add a margin-bottom to separate individual FAQ items, but only if it's not the last item */}
          {index < faqData.length - 1 && <div className="mb-4"></div>}
        </div>
      ))}
    </div>
  );
}
