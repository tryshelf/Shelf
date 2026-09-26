"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import icon from "@/public/Assets/book.png";
import shelf from "@/public/Assets/Shelfwater.png";

export default function Banner() {
  return (
    <section className="mx-auto mb-10 max-w-7xl px-5 lg:px-8">
      {/* Banner Card Container */}
      <div className="relative flex min-h-85 flex-col items-center justify-between gap-8 rounded-3xl bg-[#3D2212] p-6 md:min-h-95 md:flex-row md:p-10 lg:p-14">
        {/* Watermark image inside card clipped to rounded corners */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-3xl">
          <Image
            src={shelf}
            alt="shelf watermark"
            className="absolute -right-8 -bottom-10 h-auto w-96 object-contain opacity-10 md:w-143"
          />
        </div>

        {/* Text & Content Column */}
        <div className="relative z-10 max-w-full md:max-w-md lg:max-w-xl">
          <h1 className="text-brand font-mono text-[11px] leading-4 tracking-[1.2px] uppercase md:text-[12px]">
            The shelf is the point
          </h1>
          <h2 className="mt-2 max-w-sm font-serif text-[28px] leading-9 text-white md:text-[40px] md:leading-11 lg:text-[48px] lg:leading-12">
            A place for the stories{" "}
            <span className="text-[#E2CA99] italic">you come back to.</span>
          </h2>

          <div className="mt-6 flex flex-col items-stretch gap-3 md:mt-8 md:flex-row md:items-center">
            <div className="bg-brand flex cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-center font-sans text-[14px] leading-5 font-bold text-[#E4DBD1] transition-opacity hover:opacity-95">
              Join the waitlist <Icon icon="akar-icons:arrow-right" />
            </div>

            <a
              href="https://chat.whatsapp.com/Hfu40HaZEBRIRZTLiigkKg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#DCD2C7] px-5 py-3 text-center font-sans text-[14px] leading-5 font-bold text-white transition-colors hover:bg-white/10">
                Join our community <Icon icon="akar-icons:arrow-up-right" />
              </div>
            </a>
          </div>

          <p className="font-caveat mt-5 text-[20px] leading-8 text-[#E2CA99] md:mt-6 md:text-[24px]">
            &ldquo;Every story needs a home, and every reader needs a
            refuge.&rdquo;
          </p>
        </div>

        {/* Book Container - pops out of top border on desktop */}
        <div className="relative z-10 mt-2 hidden w-full shrink-0 justify-center md:mt-0 md:block md:flex md:w-auto">
          <div className="relative -bottom-40 w-55 md:absolute md:right-8 md:-bottom-50 md:w-65 lg:right-12 lg:-bottom-45 lg:w-77.5">
            <Image
              src={icon}
              alt="book icon"
              className="h-auto w-full object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
