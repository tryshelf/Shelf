import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import design from '@/public/Assets/Design.png';
import finance from '@/public/Assets/finance.png';
import ghiyas from '@/public/Assets/ghiyas.png';

export default function Public() {
  return (
    <section id="public" className="max-w-7xl mx-auto pt-10 lg:pt-15 pb-10 lg:pb-15 px-5 lg:px-8 border-t border-[#F1ECE4] mt-10 lg:mt-15">
      <div>
        <h1 className="uppercase text-[12px] leading-4 tracking-[1.2px] font-mono text-brand">
          building in public
        </h1>
        <h1 className="font-serif text-[#1C1917] text-[32px] md:text-[40px] lg:text-[48px] leading-10 md:leading-11 lg:leading-12 mt-2">
          Watch Shelf become real.
        </h1>
        <p className="font-sans text-[#6B625B] leading-6 lg:leading-7 text-[15px] md:text-[16px] lg:text-[18px] max-w-2xl mt-3">
          We’re building Shelf in public , sharing the ideas, experiments,
          decisions and progress along the way.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {/* Card 1 - Design Note */}
        <div className="w-full bg-white border border-[#3D2212]/10 p-5 lg:p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] lg:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#EFE8DF] text-[#1C1917] rounded-md">
                DESIGN NOTES
              </span>
              <span className="font-mono text-[11px] lg:text-[12px] text-[#6B625B]">
                Sept 10, 2026
              </span>
            </div>

            <div className="my-4 overflow-hidden rounded-xl h-48 lg:h-52 w-full flex items-center justify-center bg-[#F7F4EF]">
              <Image
                src={design}
                alt="Crafting a tactile bookshelf interface preview"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="font-serif text-[#1C1917] text-[20px] lg:text-[22px] leading-7 mt-3">
              Crafting a tactile bookshelf interface for mobile
            </h2>

            <p className="font-sans text-[9px] lg:text-[12px] text-[#6B625B] leading-relaxed mt-2 mb-6">
              How we designed digital shelves to feel as warm and physical as
              browsing an independent bookshop in Yaba or Ikeja.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#F1ECE4]">
            <span className="font-mono text-[11px] lg:text-[12px] text-[#6B625B]">
              8 min read
            </span>
            <a
              href="#"
              className="font-caveat text-[22px] lg:text-[24px] text-brand font-bold flex items-center gap-1 hover:underline"
            >
              Read note ✍️
            </a>
          </div>
        </div>

        {/* Card 2 - Finance Note */}
        <div className="w-full bg-white border border-[#3D2212]/10 p-5 lg:p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] lg:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#EFE8DF] text-[#1C1917] rounded-md">
                FINANCE NOTE
              </span>
              <span className="font-mono text-[11px] lg:text-[12px] text-[#6B625B]">
                Aug 21, 2026
              </span>
            </div>

            <div className="my-4 overflow-hidden rounded-xl h-48 lg:h-52 w-full flex items-center justify-center bg-[#F7F4EF]">
              <Image
                src={finance}
                alt="Designing the local reader discovery loop preview"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="font-serif text-[#1C1917] text-[20px] lg:text-[22px] leading-7 mt-3">
              Designing the local reader discovery loop
            </h2>

            <p className="font-sans text-[9px] lg:text-[12px] text-[#6B625B] leading-relaxed mt-2 mb-6">
              Rethinking algorithmic recommendations in favor of community book
              circles across Nigerian universities and writing hubs.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#F1ECE4]">
            <span className="font-mono text-[11px] lg:text-[12px] text-[#6B625B]">
              8 min read
            </span>
            <a
              href="#"
              className="font-caveat text-[22px] lg:text-[24px] text-brand font-bold flex items-center gap-1 hover:underline"
            >
              Read note ✍️
            </a>
          </div>
        </div>

        {/* Card 3 - Finance Note (Ghiyas) */}
        <div className="w-full bg-white border border-[#3D2212]/10 p-5 lg:p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] lg:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#EFE8DF] text-[#1C1917] rounded-md">
                FINANCE NOTE
              </span>
              <span className="font-mono text-[11px] lg:text-[12px] text-[#6B625B]">
                Aug 21, 2025
              </span>
            </div>

            <div className="my-4 overflow-hidden rounded-xl h-48 lg:h-52 w-full flex items-center justify-center bg-[#F7F4EF]">
              <Image
                src={ghiyas}
                alt="Why we're building Shelf preview"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="font-serif text-[#1C1917] text-[20px] lg:text-[22px] leading-7 mt-3">
              Why we’re building Shelf
            </h2>

            <p className="font-sans text-[9px] lg:text-[12px] text-[#6B625B] leading-relaxed mt-2 mb-6">
              Exploring why global publishing platforms fail local creators when
              the barrier between writing and earning disappears naturally.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#F1ECE4]">
            <span className="font-mono text-[11px] lg:text-[12px] text-[#6B625B]">
              8 min read
            </span>
            <a
              href="#"
              className="font-caveat text-[22px] lg:text-[24px] text-brand font-bold flex items-center gap-1 hover:underline"
            >
              Read note ✍️
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-12">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 font-sans font-bold text-brand text-[15px] hover:underline"
        >
          Follow the Build{' '}
          <Icon icon="lucide:arrow-right" className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
