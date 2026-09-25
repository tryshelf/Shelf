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
    <section className="max-w-5xl mx-auto py-8 md:py-10 lg:py-15 px-4 md:px-6 lg:px-8 mt-6 md:mt-3">
      <div className="text-center space-y-2">
        <h1 className="uppercase text-[11px] md:text-[12px] leading-4 tracking-[1.2px] font-mono text-brand">
          frequently asked question
        </h1>
        <h1 className="font-serif text-[#1C1917] text-[28px] md:text-[40px] lg:text-[48px] leading-8 md:leading-11 lg:leading-12">
          Everything you need to know
        </h1>
        <p className="font-sans text-[#6B625B] leading-6 lg:leading-7 text-[14px] md:text-[16px] lg:text-[18px] max-w-190 mx-auto mt-3 md:mt-4">
          Got questions about the Nigeria pilot, publishing terms, or waitlist
          access?
        </p>
      </div>

      {/* Accordion */}
      <div className="flex flex-col justify-center items-center gap-3 md:gap-4 mt-8 md:mt-10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="w-full max-w-3xl bg-white border border-[#3D2212]/10 p-4 md:p-6 rounded-xl md:rounded-2xl cursor-pointer transition-colors duration-200"
            >
              <div className="flex justify-between items-center gap-3 md:gap-4">
                <h3 className="font-serif text-[16px] md:text-[18px] lg:text-[20px] text-[#1C1917] leading-snug">
                  {faq.question}
                </h3>
                <span className="text-[#C85231] font-bold text-lg md:text-xl shrink-0 select-none">
                  {isOpen ? '−' : '+'}
                </span>
              </div>

              {isOpen && (
                <p className="font-sans text-[#6B625B] text-[13px] md:text-[15px] lg:text-[16px] leading-relaxed mt-2.5 md:mt-3 border-t border-[#F1ECE4] pt-2.5 md:pt-3">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <hr className="my-6 border-t border-[#F1ECE4] mt-12 md:mt-16 lg:mt-20" />
    </section>
  );
}
