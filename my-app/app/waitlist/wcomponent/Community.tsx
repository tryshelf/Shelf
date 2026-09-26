import { Icon } from "@iconify/react";

export default function Community() {
  return (
    <section
      id="community"
      className="mx-auto mt-5 max-w-6xl px-5 py-10 lg:px-8 lg:py-15"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-brand font-mono text-[12px] leading-4 tracking-[1.2px] uppercase">
          the founding community
        </h1>
        <h1 className="font-serif text-[32px] leading-10 text-[#1C1917] md:text-[40px] md:leading-11 lg:text-[48px] lg:leading-12">
          Help us build Shelf.
        </h1>
        <p className="mx-auto mt-4 max-w-190 font-sans text-[15px] leading-6 text-[#6B625B] md:text-[16px] lg:text-[18px] lg:leading-7">
          Shelf isn’t finished yet and that’s the point. We’re bringing together
          a small group of readers and writers who want to be here from the
          beginning.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div className="flex w-full flex-col items-start space-y-3 rounded-2xl border border-[#3D2212]/10 bg-white p-6 lg:w-auto">
          <h1 className="text-brand font-serif text-[32px]">01</h1>
          <h2 className="font-serif text-[20px] leading-7">
            Tell us what you need
          </h2>
          <p className="max-w-full font-sans text-[14px] leading-[22.8px] text-[#6B625B] lg:max-w-62.5">
            What would make publishing or reading easier for you?
          </p>
        </div>

        <div className="flex w-full flex-col items-start space-y-3 rounded-2xl border border-[#3D2212]/10 bg-white p-6 lg:w-auto">
          <h1 className="text-brand font-serif text-[32px]">02</h1>
          <h2 className="font-serif text-[20px] leading-7">
            Test what we’re building
          </h2>
          <p className="max-w-full font-sans text-[14px] leading-[22.8px] text-[#6B625B] lg:max-w-62.5">
            Experience parts of Shelf early as they become ready.
          </p>
        </div>

        <div className="flex w-full flex-col items-start space-y-3 rounded-2xl border border-[#3D2212]/10 bg-white p-6 lg:w-auto">
          <h1 className="text-brand font-serif text-[32px]">03</h1>
          <h2 className="font-serif text-[20px] leading-7">Give feedback</h2>
          <p className="max-w-full font-sans text-[14px] leading-[22.8px] text-[#6B625B] lg:max-w-70">
            Tell us what works, what doesn’t, and what we should rethink.
          </p>
        </div>

        <div className="flex w-full flex-col items-start space-y-3 rounded-2xl border border-[#3D2212]/10 bg-white p-6 lg:w-auto">
          <h1 className="text-brand font-serif text-[32px]">04</h1>
          <h2 className="font-serif text-[20px] leading-7">
            Shape what’s next
          </h2>
          <p className="max-w-full font-sans text-[14px] leading-[22.8px] text-[#6B625B] lg:max-w-77">
            Help influence the product we’re building.
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <div className="w-full space-y-4 rounded-3xl border border-[#3D2212]/10 bg-[#EFE8DF]/60 p-6 text-center lg:p-8">
          <h1 className="font-serif text-[24px] leading-7.5 text-[#1C1917] md:text-[28px] lg:text-[30px]">
            Come build with us.
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-[14px] leading-6 text-[#6B625B] lg:text-[16px] lg:leading-6.5">
            As Shelf gets closer to launch, members of the Founding Community
            will have the opportunity to join our closed beta, experience what
            we’re building, share ideas, meet people and help us improve it
            before we open the doors more widely.{" "}
          </p>

          <a
            href="https://chat.whatsapp.com/Hfu40HaZEBRIRZTLiigkKg"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="bg-brand mt-4 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 font-sans text-[14px] leading-5 font-bold text-[#E4DBD1]">
              Join the Founding Community{" "}
              <Icon icon="akar-icons:arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
