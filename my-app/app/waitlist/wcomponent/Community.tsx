import { Icon } from "@iconify/react";

export default function Community() {
  return (
    <section className="max-w-6xl mx-auto py-10 lg:py-15 px-5 lg:px-8 mt-5">
      <div className="text-center space-y-2">
        <h1 className="uppercase text-[12px] leading-4 tracking-[1.2px] font-mono text-brand">
          the founding community
        </h1>
        <h1 className="font-serif text-[#1C1917] text-[32px] md:text-[40px] lg:text-[48px] leading-10 md:leading-11 lg:leading-12">
          Help us build Shelf.
        </h1>
        <p className="font-sans text-[#6B625B] leading-6 lg:leading-7 text-[15px] md:text-[16px] lg:text-[18px] max-w-190 mx-auto mt-4">
          Shelf isn’t finished yet and that’s the point. We’re bringing together
          a small group of readers and writers who want to be here from the
          beginning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between lg:items-center gap-6 lg:gap-8 mt-10">
        <div className="bg-white border border-[#3D2212]/10 p-6 space-y-3 rounded-2xl flex flex-col items-start w-full lg:w-auto">
          <h1 className="text-brand font-serif text-[32px]">01</h1>
          <h2 className="font-serif text-[20px] leading-7">
            Tell us what you need
          </h2>
          <p className="font-sans leading-[22.8px] text-[14px] text-[#6B625B] max-w-full lg:max-w-62.5">
            What would make publishing or reading easier for you?
          </p>
        </div>

        <div className="bg-white border border-[#3D2212]/10 p-6 space-y-3 rounded-2xl flex flex-col items-start w-full lg:w-auto">
          <h1 className="text-brand font-serif text-[32px]">02</h1>
          <h2 className="font-serif text-[20px] leading-7">
            Test what we’re building
          </h2>
          <p className="font-sans leading-[22.8px] text-[14px] text-[#6B625B] max-w-full lg:max-w-62.5">
            Experience parts of Shelf early as they become ready.
          </p>
        </div>

        <div className="bg-white border border-[#3D2212]/10 p-6 space-y-3 rounded-2xl flex flex-col items-start w-full lg:w-auto">
          <h1 className="text-brand font-serif text-[32px]">03</h1>
          <h2 className="font-serif text-[20px] leading-7">Give feedback</h2>
          <p className="font-sans leading-[22.8px] text-[14px] text-[#6B625B] max-w-full lg:max-w-70">
            Tell us what works, what doesn’t, and what we should rethink.
          </p>
        </div>

        <div className="bg-white border border-[#3D2212]/10 p-6 space-y-3 rounded-2xl flex flex-col items-start w-full lg:w-auto">
          <h1 className="text-brand font-serif text-[32px]">04</h1>
          <h2 className="font-serif text-[20px] leading-7">
            Shape what’s next
          </h2>
          <p className="font-sans leading-[22.8px] text-[14px] text-[#6B625B] max-w-full lg:max-w-77">
            Help influence the product we’re building.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div className="rounded-3xl bg-[#EFE8DF]/60 border border-[#3D2212]/10 p-6 lg:p-8 text-center space-y-4 w-full">
          <h1 className="font-serif text-[24px] md:text-[28px] lg:text-[30px] leading-7.5 text-[#1C1917]">
            Come build with us.
          </h1>
          <p className="text-[#6B625B] leading-6 lg:leading-6.5 text-[14px] lg:text-[16px] font-sans max-w-2xl mx-auto">
            As Shelf gets closer to launch, members of the Founding Community
            will have the opportunity to join our closed beta, experience what
            we’re building, share ideas, meet people and help us improve it
            before we open the doors more widely.{' '}
          </p>

          <div className="text-[14px] mt-4 leading-5 font-bold font-sans px-5 py-3 inline-flex bg-brand text-[#E4DBD1] rounded-full cursor-pointer justify-center items-center gap-2">
            Join the Founding Community <Icon icon="akar-icons:arrow-up-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
