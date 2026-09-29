import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Experience() {
  return (
    <section className="mx-auto mt-5 max-w-7xl px-5 py-10 lg:px-8 lg:py-15">
      <div className="space-y-2 text-center">
        <h1 className="text-brand font-mono text-[12px] leading-4 tracking-[1.2px] uppercase">
          tailored experience
        </h1>
        <h1 className="font-serif text-[32px] leading-10 text-[#1C1917] md:text-[40px] md:leading-11 lg:text-[48px] lg:leading-12">
          Built for those who read and those who write.
        </h1>
        <p className="mx-auto mt-4 max-w-190 font-sans text-[15px] leading-6 text-[#6B625B] md:text-[16px] lg:text-[18px] lg:leading-7">
          Explore how Shelf provides a dedicated home for both sides of the
          literary ecosystem.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-stretch gap-6 lg:mt-14 lg:flex-row lg:justify-between lg:gap-8">
        {/* Card 1 - For Authors & Writers */}
        <div className="flex w-full flex-col justify-between rounded-3xl border border-[#3D2212]/10 bg-white p-6 lg:w-1/2 lg:p-9">
          <div>
            <div className="bg-brand/10 flex h-12 w-12 items-center justify-center rounded-2xl">
              <Icon icon="lucide:pen-tool" className="text-brand h-6 w-6" />
            </div>

            <h2 className="mt-4 font-sans text-[24px] leading-tight text-[#1C1917] lg:text-[28px]">
              For Authors & Writers
            </h2>

            <p className="mt-3 mb-6 font-sans text-[12px] leading-relaxed text-[#6B625B] lg:text-[14px]">
              Whether you’re an established novelist or an emerging voice
              writing short stories in your notes app, Shelf gives you full
              control over your work and earnings.
            </p>

            <ul className="mb-8 space-y-3.5">
              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="text-brand mt-0.5 h-4 w-4 shrink-0"
                />
                <span className="font-sans text-[11px] leading-snug font-medium text-[#3D2212] lg:text-[13px]">
                  Direct NGN payouts into your local bank account
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="text-brand mt-0.5 h-4 w-4 shrink-0"
                />
                <span className="font-sans text-[11px] leading-snug font-medium text-[#3D2212] lg:text-[13px]">
                  Zero publisher gatekeeping or lengthy submission delays
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="text-brand mt-0.5 h-4 w-4 shrink-0"
                />
                <span className="font-sans text-[11px] leading-snug font-medium text-[#3D2212] lg:text-[13px]">
                  Retain 100% ownership of your intellectual property rights
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="text-brand mt-0.5 h-4 w-4 shrink-0"
                />
                <span className="font-sans text-[11px] leading-snug font-medium text-[#3D2212] lg:text-[13px]">
                  Analytics on local reader engagement & chapter completion
                  rates
                </span>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-t border-[#DCD2C7]" />

          <Link href="/waitlist/join">
            <button className="bg-brand flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-sans text-[11px] font-bold tracking-wider text-white uppercase transition-opacity hover:opacity-95 lg:text-[12px]">
              JOIN THE WAITLIST{" "}
              <Icon icon="lucide:arrow-right" className="h-4 w-4" />
            </button>
          </Link>
        </div>

        {/* Card 2 - For Readers & Story Lovers */}
        <div className="flex w-full flex-col justify-between rounded-3xl border border-[#3D2212]/10 bg-white p-6 lg:w-1/2 lg:p-9">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3D2212]/10">
              <Icon
                icon="lucide:book-open"
                className="h-6 w-6 text-[#3D2212]"
              />
            </div>

            <h2 className="mt-4 font-sans text-[24px] leading-tight text-[#1C1917] lg:text-[28px]">
              For Readers & Story Lovers
            </h2>

            <p className="mt-3 mb-6 font-sans text-[12px] leading-relaxed text-[#6B625B] lg:text-[14px]">
              Discover books from new voices, independent writers and stories
              you might never find anywhere else and build your personal digital
              library. Read distraction-free on any smartphone, tablet, or
              laptop.
            </p>

            <ul className="mb-8 space-y-3.5">
              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#3D2212]"
                />
                <span className="font-sans text-[11px] leading-snug font-medium text-[#3D2212] lg:text-[13px]">
                  Pay in Naira with local debit cards, transfer, or USSD
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#3D2212]"
                />
                <span className="font-sans text-[11px] leading-snug font-medium text-[#3D2212] lg:text-[13px]">
                  Tactile digital bookshelf with realistic wood grain aesthetics
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#3D2212]"
                />
                <span className="font-sans text-[11px] leading-snug font-medium text-[#3D2212] lg:text-[13px]">
                  Offline reading mode for low-connectivity environments
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#3D2212]"
                />
                <span className="font-sans text-[11px] leading-snug font-medium text-[#3D2212] lg:text-[13px]">
                  Exclusive founding member badges and book club discussions
                </span>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-t border-[#DCD2C7]" />

          <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#3D2212] px-6 py-3.5 font-sans text-[11px] font-bold tracking-wider text-[#E4DBD1] uppercase transition-opacity hover:opacity-95 lg:text-[12px]">
            CLAIM READER ACCESS{" "}
            <Icon icon="lucide:arrow-right" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
