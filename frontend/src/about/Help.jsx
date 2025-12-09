import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import "./Help.css"
export default function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I buy jewellery directly from this website?",
      answer:
        "No. This website only displays jewellery designs and prices. To purchase, please visit the shop or contact us separately."
    },
    {
      question: "Are the prices shown final?",
      answer:
        "Prices are approximate and may vary depending on purity, weight, and daily gold rates."
    },
    {
      question: "Do I need an account to view products?",
      answer:
        "No. All items are visible to everyone without login or registration."
    },
    {
      question: "Is any personal data collected?",
      answer:
        "No. We do not collect login, payment, or sensitive personal details."
    },
    {
      question: "How often do you add new products?",
      answer:
        "New jewellery items are added whenever fresh stock arrives in-store."
    },
    {
      question: "Will the product look exactly like the image?",
      answer:
        "There may be slight variations due to lighting and photography."
    }
  ];

  // Toggle open FAQ
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-10 mt-5 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-pink-100 text-pink-600 w-14 h-14 rounded-full mb-4">
          <HelpCircle size={32} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Help & FAQs</h1>
        <p className="text-gray-600 mt-2">
          Find quick answers about our jewellery showcase website.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border help-container rounded-xl p-4 shadow-sm hover:shadow-md transition-all bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center quation-container text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800 ">
                {faq.question}
               {openIndex === index ? (
                <ChevronUp size={22} className="text-gray-600" />
              ) : (
                <ChevronDown size={22} className="text-gray-600" />
              )}
              </h3>
             
            </button>

            {openIndex === index && (
              <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
