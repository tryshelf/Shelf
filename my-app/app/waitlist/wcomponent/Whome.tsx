import Image from "next/image";
import { Icon } from "@iconify/react";
import shelf from "@/public/Assets/shelf.png";

export default function WHome() {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-14">
        {/* Left column */}
        <div>
          <p className="text-brand font-mono text-[12px] leading-4 tracking-[1.2px] uppercase">
            a new home for stories
          </p>

          <h1 className="mt-4 max-w-[320px] font-serif text-[48px] leading-11 tracking-tight text-[#1C1917] sm:text-[72px] sm:leading-16 lg:max-w-130 lg:text-[118.4px] lg:leading-[94.7px] lg:tracking-[-4.474px]">
            There is always room{" "}
            <span className="text-brand italic">for a story.</span>
          </h1>

          <p className="mt-6 max-w-lg font-sans text-[16px] leading-6.5 text-[#817065] sm:text-[18px] sm:leading-[29.2px] lg:mt-8">
            Shelf is a reading room and publishing home for African voices.
            Discover, buy, own, and read books from African authors. Or publish
            your own and get paid directly into your bank account.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <div className="bg-brand flex items-center justify-center gap-2 rounded-full px-5 py-3 font-sans text-[14px] leading-5 font-bold text-[#E4DBD1]">
              Join the waitlist <Icon icon="akar-icons:arrow-up-right" />
            </div>

            <a
              href="https://chat.whatsapp.com/Hfu40HaZEBRIRZTLiigkKg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#DCD2C7] px-5 py-3 font-sans text-[14px] leading-5 font-bold">
                Join our community <Icon icon="akar-icons:arrow-up-right" />
              </div>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {/* Overlapping Avatars Container */}
            <div className="flex shrink-0 -space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C85231] text-[12px] font-medium text-white ring-2 ring-[#F7F4EF]">
                L
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DE9E62] text-[12px] font-medium text-white ring-2 ring-[#F7F4EF]">
                A
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4A2818] text-[12px] font-medium text-white ring-2 ring-[#F7F4EF]">
                P
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2A4B5C] text-[12px] font-medium text-white ring-2 ring-[#F7F4EF]">
                +
              </div>
            </div>

            {/* Text Label */}
            <p className="font-sans text-[12px] font-medium whitespace-normal text-[#6B625B] sm:whitespace-nowrap">
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
            className="relative top-4 h-auto max-w-full lg:top-20 lg:h-auto lg:max-w-none"
            priority
          />

          <div className="absolute top-4 right-2 inline-flex rotate-10 rounded-[12.8px] bg-[#D1BA85] px-4 py-3 text-[12px] leading-4 font-bold text-[#342A22] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10)] md:top-10 md:right-10 lg:top-24 lg:right-15">
            A Glimpse of Shelf
          </div>
          <div className="absolute bottom-6 left-0 inline-flex rotate-5 rounded-[12.8px] bg-[#D1BA85] px-4 py-3 text-[12px] leading-4 font-bold text-[#342A22] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10)] md:bottom-25 lg:bottom-13">
            For Readers and Authors
          </div>
        </div>
      </div>
    </section>
  );
}
