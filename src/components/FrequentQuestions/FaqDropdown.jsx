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
        "You can typically schedule a service within 24–48 hours of booking, depending on availability in your area.",
    },
    {
      question: "What’s your cancellation or rescheduling policy?",
      answer:
        "You can cancel or reschedule up to 24 hours before the service without penalty. Changes within 24 hours may incur a small fee.",
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
    <div className="w-full max-w-4xl bg-white rounded-lg mx-auto my-8">
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`cursor-pointer border border-gray-200 rounded-lg transition-colors ${
              openIndex === index ? "bg-[#CEE3F8]" : "bg-[#E6EEF6] hover:bg-[#cee3f8]"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center p-4">
              <h3 className="text-lg font-medium text-gray-800 w-[207px] md:w-full">
                {faq.question}
              </h3>
              <svg
                className={`w-[28px] h-[28px] rounded-full bg-[#0550A1] text-gray-100 transform transition-transform duration-300 ${
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
                />
              </svg>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 pt-0 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
          {index < faqData.length - 1 && <div className="mb-4" />}
        </div>
      ))}
    </div>
  );
}
