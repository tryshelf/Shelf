import { Icon } from '@iconify/react';

export default function Experience() {
  return (
    <section className="max-w-7xl mx-auto py-10 lg:py-15 px-5 mt-5 lg:px-8">
      <div className="text-center space-y-2">
        <h1 className="uppercase text-[12px] leading-4 tracking-[1.2px] font-mono text-brand">
          tailored experience
        </h1>
        <h1 className="font-serif text-[#1C1917] text-[32px] md:text-[40px] lg:text-[48px] leading-10 md:leading-11 lg:leading-12">
          Built for those who read and those who write.
        </h1>
        <p className="font-sans text-[#6B625B] leading-6 lg:leading-7 text-[15px] md:text-[16px] lg:text-[18px] max-w-190 mx-auto mt-4">
          Explore how Shelf provides a dedicated home for both sides of the
          literary ecosystem.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between items-stretch gap-6 lg:gap-8 mt-10 lg:mt-14">
        {/* Card 1 - For Authors & Writers */}
        <div className="w-full lg:w-1/2 p-6 lg:p-9 rounded-3xl border border-[#3D2212]/10 bg-white flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center">
              <Icon icon="lucide:pen-tool" className="w-6 h-6 text-brand" />
            </div>

            <h2 className="font-serif text-[#1C1917] text-[24px] lg:text-[28px] leading-tight mt-4">
              For Authors & Writers
            </h2>

            <p className="font-sans text-[12px] lg:text-[14px] text-[#6B625B] leading-relaxed mt-3 mb-6">
              Whether you’re an established novelist or an emerging voice
              writing short stories in your notes app, Shelf gives you full
              control over your work and earnings.
            </p>

            <ul className="space-y-3.5 mb-8">
              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="w-4 h-4 text-brand shrink-0 mt-0.5"
                />
                <span className="font-sans text-[11px] lg:text-[13px] text-[#3D2212] font-medium leading-snug">
                  Direct NGN payouts into your local bank account
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="w-4 h-4 text-brand shrink-0 mt-0.5"
                />
                <span className="font-sans text-[11px] lg:text-[13px] text-[#3D2212] font-medium leading-snug">
                  Zero publisher gatekeeping or lengthy submission delays
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="w-4 h-4 text-brand shrink-0 mt-0.5"
                />
                <span className="font-sans text-[11px] lg:text-[13px] text-[#3D2212] font-medium leading-snug">
                  Retain 100% ownership of your intellectual property rights
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="w-4 h-4 text-brand shrink-0 mt-0.5"
                />
                <span className="font-sans text-[11px] lg:text-[13px] text-[#3D2212] font-medium leading-snug">
                  Analytics on local reader engagement & chapter completion
                  rates
                </span>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-t border-[#DCD2C7]" />

          <button className="w-full py-3.5 px-6 rounded-2xl bg-brand text-white font-sans font-bold text-[11px] lg:text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer hover:opacity-95 transition-opacity">
            JOIN THE WAITLIST{' '}
            <Icon icon="lucide:arrow-right" className="w-4 h-4" />
          </button>
        </div>

        {/* Card 2 - For Readers & Story Lovers */}
        <div className="w-full lg:w-1/2 p-6 lg:p-9 rounded-3xl border border-[#3D2212]/10 bg-white flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#3D2212]/10 flex items-center justify-center">
              <Icon
                icon="lucide:book-open"
                className="w-6 h-6 text-[#3D2212]"
              />
            </div>

            <h2 className="font-serif text-[#1C1917] text-[24px] lg:text-[28px] leading-tight mt-4">
              For Readers & Story Lovers
            </h2>

            <p className="font-sans text-[12px] lg:text-[14px] text-[#6B625B] leading-relaxed mt-3 mb-6">
              Discover books from new voices, independent writers and stories
              you might never find anywhere else and build your personal digital
              library. Read distraction-free on any smartphone, tablet, or
              laptop.
            </p>

            <ul className="space-y-3.5 mb-8">
              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="w-4 h-4 text-[#3D2212] shrink-0 mt-0.5"
                />
                <span className="font-sans text-[11px] lg:text-[13px] text-[#3D2212] font-medium leading-snug">
                  Pay in Naira with local debit cards, transfer, or USSD
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="w-4 h-4 text-[#3D2212] shrink-0 mt-0.5"
                />
                <span className="font-sans text-[11px] lg:text-[13px] text-[#3D2212] font-medium leading-snug">
                  Tactile digital bookshelf with realistic wood grain aesthetics
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="w-4 h-4 text-[#3D2212] shrink-0 mt-0.5"
                />
                <span className="font-sans text-[11px] lg:text-[13px] text-[#3D2212] font-medium leading-snug">
                  Offline reading mode for low-connectivity environments
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Icon
                  icon="game-icons:check-mark"
                  className="w-4 h-4 text-[#3D2212] shrink-0 mt-0.5"
                />
                <span className="font-sans text-[11px] lg:text-[13px] text-[#3D2212] font-medium leading-snug">
                  Exclusive founding member badges and book club discussions
                </span>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-t border-[#DCD2C7]" />

          <button className="w-full py-3.5 px-6 rounded-2xl bg-[#3D2212] text-[#E4DBD1] font-sans font-bold text-[11px] lg:text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer hover:opacity-95 transition-opacity">
            CLAIM READER ACCESS{' '}
            <Icon icon="lucide:arrow-right" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
