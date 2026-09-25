import Image from 'next/image';
import { Icon } from '@iconify/react';
import shelf from '@/public/Assets/shelf.png';

export default function WHome() {
  return (
    <section className="mx-auto max-w-7xl py-12 px-5  lg:py-20 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* Left column */}
        <div>
          <p className="uppercase text-[12px] leading-4 tracking-[1.2px] font-mono text-brand">
            a new home for stories
          </p>

          <h1 className="mt-4 font-serif text-[48px] sm:text-[72px] lg:text-[118.4px] leading-11 sm:leading-16 lg:leading-[94.7px] tracking-tight lg:tracking-[-4.474px] text-[#1C1917] max-w-[320px] lg:max-w-130">
            There is always room{' '}
            <span className="text-brand italic">for a story.</span>
          </h1>

          <p className="font-sans leading-6.5 sm:leading-[29.2px] text-[16px] sm:text-[18px] text-[#817065] mt-6 lg:mt-8 max-w-lg">
            Shelf is a reading room and publishing home for African voices.
            Discover, buy, own, and read books from African authors. Or publish
            your own and get paid directly into your bank account.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8">
            <div className=" text-[14px] leading-5 font-bold font-sans px-5 py-3 bg-brand text-[#E4DBD1] rounded-full flex justify-center items-center gap-2">
              Join the waitlist <Icon icon="akar-icons:arrow-up-right" />
            </div>
            <div className=" text-[14px] leading-5 font-bold font-sans px-5 py-3 border border-[#DCD2C7]  rounded-full flex justify-center items-center gap-2">
              Join our community <Icon icon="akar-icons:arrow-up-right" />
            </div>
          </div>

          <div className="flex items-center gap-3 mt-8">
            {/* Overlapping Avatars Container */}
            <div className="flex -space-x-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#C85231] text-white text-[12px] font-medium flex items-center justify-center ring-2 ring-[#F7F4EF]">
                L
              </div>
              <div className="w-8 h-8 rounded-full bg-[#DE9E62] text-white text-[12px] font-medium flex items-center justify-center ring-2 ring-[#F7F4EF]">
                A
              </div>
              <div className="w-8 h-8 rounded-full bg-[#4A2818] text-white text-[12px] font-medium flex items-center justify-center ring-2 ring-[#F7F4EF]">
                P
              </div>
              <div className="w-8 h-8 rounded-full bg-[#2A4B5C] text-white text-[12px] font-medium flex items-center justify-center ring-2 ring-[#F7F4EF]">
                +
              </div>
            </div>

            {/* Text Label */}
            <p className="text-[12px] text-[#6B625B] font-sans font-medium whitespace-normal sm:whitespace-nowrap">
              Join 740+ early Nigerian readers & authors in our Founding
              Community
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="relative">
          <Image
            src={shelf}
            alt="Shelf logo"
            className="relative top-4 lg:top-20 max-w-full lg:max-w-none h-auto lg:h-auto"
            priority
          />

          <div className="absolute top-4 right-2 lg:top-24 lg:right-15 px-4 py-3 rounded-[12.8px] bg-[#D1BA85] rotate-10 inline-flex text-[#342A22] leading-4 text-[12px] font-bold shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10)]">
            A Glimpse of Shelf
          </div>
          <div className="absolute bottom-13 left-0 px-4 py-3 rounded-[12.8px] bg-[#D1BA85] rotate-5 inline-flex text-[#342A22] leading-4 text-[12px] font-bold shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10)]">
            For Readers and Authors
          </div>
        </div> 
      </div>
    </section>
  );
}


