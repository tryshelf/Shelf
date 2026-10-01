'use client'

import { useState } from 'react';

export default function FAQ() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const toggleFAQ = (index: number) => {
   // If clicking the currently open item, close it; otherwise, open the new one
   setOpenIndex(openIndex === index ? null : index);
 };
 
  const faqs = [
    {
      question: 'What is Shelf?',
      answer:
        'Shelf is a publishing and reading platform where writers can publish books and reach readers, while readers can discover, buy and read stories.',
    },
    {
      question: 'Is Shelf only for African Stories?',
      answer:
        'No. Shelf is for stories of all kinds and from anywhere. We’re starting in Nigeria, with plans to grow across Africa and beyond.',
    },
    {
      question: 'Who can publish on Shelf?',
      answer:
        'Shelf is open to all writers—whether you’re an established author, an emerging voice, or publishing your very first story.',
    },

    {
      question: 'Does it cost money to publish?',
      answer:
        'Our planned model is to let authors publish without an upfront publishing fee. Shelf plans to take a 20% commission from book sales, with authors keeping 80%.',
    },
    {
      question: 'When will Shelf be available?',
      answer:
        'We’re still building. Join the waitlist and we’ll keep you updated as we get closer.',
    },
  ];

  return (
    <section
      id="faq"
      className="mx-auto mt-6 max-w-5xl px-4 py-8 md:mt-3 md:px-6 md:py-10 lg:px-8 lg:py-15"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-brand font-mono text-[11px] leading-4 tracking-[1.2px] uppercase md:text-[12px]">
          frequently asked question
        </h1>
        <h1 className="font-serif text-[40px] leading-10 text-[#1C1917] md:text-[50px] md:leading-11 lg:text-[68px] lg:leading-15.5 lg:tracking-[-3.5px]">
          Everything you need to know
        </h1>
        <p className="mx-auto mt-3 max-w-190 font-sans text-[14px] leading-6 text-[#6B625B] md:mt-4 md:text-[16px] lg:text-[18px] lg:leading-7">
          Got questions about the Nigeria pilot, publishing terms, or waitlist
          access?
        </p>
      </div>

      {/* Accordion */}
      <div className="mt-8 flex flex-col items-center justify-center gap-3 md:mt-10 md:gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="w-full max-w-3xl cursor-pointer rounded-xl border border-[#3D2212]/10 bg-white p-4 transition-colors duration-200 md:rounded-2xl md:p-6"
            >
              <div className="flex items-center justify-between gap-3 md:gap-4">
                <h3 className="font-sans text-[16px] leading-snug text-[#1C1917] md:text-[18px] lg:text-[20px]">
                  {faq.question}
                </h3>
                <span className="shrink-0 text-lg font-bold text-[#C85231] select-none md:text-xl">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {isOpen && (
                <p className="mt-2.5 border-t border-[#F1ECE4] pt-2.5 font-sans text-[13px] leading-relaxed text-[#6B625B] md:mt-3 md:pt-3 md:text-[15px] lg:text-[16px]">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <hr className="my-6 mt-12 border-t border-[#F1ECE4] md:mt-16 lg:mt-20" />
    </section>
  );
}
