"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "Who owns the rights to DoUndo?",
    answer: `All intellectual property associated with
DoUndo, including artwork, symbols,
card designs, manuals, packaging,
website content, and digital materials, is
owned and controlled by DoUndo Corp.

Unauthorized use, copying, or reproduction is strictly prohibited.`,
  },
  {
    question:
      "Can I use DoUndo images, logos, or symbols in my own projects or videos?",
    answer: `You may not use DoUndo logos, symbols, artwork, or other proprietary assets for commercial
purposes without prior written permission from DoUndo Corp. For fan content or collaboration
proposals, please contact us through the official website.`,
  },
  {
    question: `What should I do if my order arrives damaged or incomplete?`,
    answer: `If your order arrives damaged, incomplete, or with the wrong items, please contact our support
team at Info@doundogames.com within 7 days of delivery. Include your order number and clear
photos where possible. We will review your case and arrange a replacement or other
appropriate solution.`,
  },
  {
    question: "Are custom duties or import taxes included in my order total?",
    answer: `For international orders, customs duties, import taxes, and local VAT are typically not included in
the product or shipping price. These additional charges, if any, are usually collected by your
local customs authority and are the responsibility of the recipient.`,
  },
  {
    question: "What happens if my package is lost in transit?",
    answer: `If tracking information suggests that your package has been lost in transit, we will work with the
carrier to investigate. Once loss is confirmed, we will, in line with our Shipping Policy, either
send a replacement or offer a refund, depending on the specific circumstances.`,
  },
  {
    question: "Can retailers or partners distribute DoUndo?",
    answer: `We welcome interest from retailers, distributors, and collaboration partners. Please reach out
through our official contact channels with details about your business, location, and volume
expectations so we can review and discuss potential partnerships.`,
    isHighlighted: true,
  },
  {
    question: "How can I contact DoUndo for general questions or support?",
    answer: `For general questions, product support, or order-related inquiries, please contact us at
Info@doundogames.com or through the contact form on our official website. For privacy or legal
matters, you may use indicated in our policies.`,
  },
];

export default function FAQPixelPerfect() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF6EE] text-stone-950 px-6 md:px-12 lg:px-24 py-20  flex items-center justify-center font-sans antialiased">
      <div className=" container mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Typography Block - 5 Columns */}
        <div className="lg:col-span-5 sticky top-12 space-y-4">
          <span className="text-[#E97443] text-xs font-bold tracking-widest uppercase block">
            FAQ
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Questions? <br />
            <span className="text-[#3A8B91]">We have answers.</span>
          </h2>

          <p className="text-stone-500 text-xs md:text-sm leading-relaxed max-w-xs font-normal">
            Everything you need to know about the product, licensing,
            transparency and transparency.
          </p>
        </div>

        {/* Right Accordion List Block - 7 Columns */}
        <div className="lg:col-span-7 w-full border-t border-stone-200/70">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-stone-200/70 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4.5 flex items-center justify-between text-left group focus:outline-none"
                >
                  <span
                    className={`text-xs md:text-[16px] font-medium tracking-wide pr-4 transition-colors duration-200 ${
                      item.isHighlighted
                        ? "text-[#E97443]"
                        : "text-stone-800 group-hover:text-stone-950"
                    }`}
                  >
                    {item.question}
                  </span>

                  <div className="flex-shrink-0 w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center bg-transparent transition-colors group-hover:border-stone-500">
                    <span className="text-stone-400 text-[10px] font-bold select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[200px] opacity-100 pb-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-stone-500 text-xs md:text-[13px] leading-relaxed pl-1 max-w-2xl font-normal">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}

          <p className="text-[10px] text-stone-400/80 leading-relaxed mt-6 tracking-wide max-w-2xl">
            *You can choose to delete your details or change accuracy boundaries
            at any time through standard profile settings. For order-specific
            issues, please validate your order number to help us assist you
            faster.
          </p>
        </div>
      </div>
    </section>
  );
}
