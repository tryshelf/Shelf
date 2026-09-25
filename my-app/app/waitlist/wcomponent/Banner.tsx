'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';
import icon from '@/public/Assets/book.png';
import shelf from '@/public/Assets/Shelfwater.png';

export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto mb-10 px-5 lg:px-8">
      {/* Banner Card Container */}
      <div className="bg-[#3D2212] rounded-3xl p-6 md:p-10 lg:p-14 relative flex flex-col md:flex-row items-center justify-between gap-8 min-h-85 md:min-h-95">
        {/* Watermark image inside card clipped to rounded corners */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-0">
          <Image
            src={shelf}
            alt="shelf watermark"
            className="absolute -right-8 -bottom-10 w-96 md:w-143 h-auto opacity-10 object-contain"
          />
        </div>

        {/* Text & Content Column */}
        <div className="relative z-10 max-w-full md:max-w-md lg:max-w-xl">
          <h1 className="uppercase text-[11px] md:text-[12px] leading-4 tracking-[1.2px] font-mono text-brand ">
            The shelf is the point
          </h1>
          <h2 className="font-serif max-w-sm text-white text-[28px] md:text-[40px] lg:text-[48px] leading-9 md:leading-11 lg:leading-12 mt-2">
            A place for the stories{' '}
            <span className="text-[#E2CA99] italic">you come back to.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mt-6 md:mt-8">
            <div className="text-[14px] leading-5 font-bold font-sans px-5 py-3 bg-brand text-[#E4DBD1] rounded-full flex justify-center items-center gap-2 cursor-pointer hover:opacity-95 transition-opacity text-center">
              Join the waitlist <Icon icon="akar-icons:arrow-right" />
            </div>
            <div className="text-white text-[14px] leading-5 font-bold font-sans px-5 py-3 border border-[#DCD2C7] rounded-full flex justify-center items-center gap-2 cursor-pointer hover:bg-white/10 transition-colors text-center">
              Join our community <Icon icon="akar-icons:arrow-up-right" />
            </div>
          </div>

          <p className="font-caveat text-[#E2CA99] text-[20px] md:text-[24px] leading-8 mt-5 md:mt-6">
            &ldquo;Every story needs a home, and every reader needs a
            refuge.&rdquo;
          </p>
        </div>

        {/* Book Container - pops out of top border on desktop */}
        <div className="hidden relative z-10 w-full md:w-auto md:flex justify-center md:block shrink-0 mt-2 md:mt-0">
          <div className="relative md:absolute md:right-8 lg:right-12 -bottom-40 md:-bottom-50 lg:-bottom-45 w-55 md:w-65 lg:w-77.5">
            <Image
              src={icon}
              alt="book icon"
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
