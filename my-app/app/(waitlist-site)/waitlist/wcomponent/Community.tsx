import { Icon } from "@iconify/react";

export default function Community() {
  const cards = [
    {
      num: "01",
      title: "Tell us what you need",
      desc: "What would make publishing or reading easier for you?",
    },
    {
      num: "02",
      title: "Test what we’re building",
      desc: "Experience parts of Shelf early as they become ready.",
    },
    {
      num: "03",
      title: "Give feedback",
      desc: "Tell us what works, what doesn’t, and what we should rethink.",
    },
    {
      num: "04",
      title: "Shape what’s next",
      desc: "Help influence the product we’re building.",
    },
  ];

  return (
    <section
      id="community"
      className="mx-auto mt-5 max-w-7xl px-5 py-10 lg:px-8 lg:py-15"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-brand font-mono text-[12px] leading-4 tracking-[1.2px] uppercase">
          the founding community
        </h1>
        <h1 className="font-serif text-[40px] leading-10 text-[#1C1917] md:text-[50px] md:leading-11 lg:text-[68px] lg:leading-15.5 lg:tracking-[-3.5px]">
          Help us build Shelf.
        </h1>
        <p className="mx-auto mt-2 max-w-190 font-sans text-[15px] leading-6 text-[#6B625B] md:text-[16px] lg:text-[18px] lg:leading-7">
          Shelf isn’t finished yet and that’s the point. We’re bringing together
          a small group of readers and writers who want to be here from the
          beginning.
        </p>
      </div>

      {/* Grid container forces equal 25% width per card on large screens */}
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.num}
            className="flex flex-col justify-between rounded-2xl border border-[#3D2212]/10 bg-white p-6 transition-all hover:shadow-sm"
          >
            <div className="space-y-3">
              <span className="text-brand block font-sans text-[22px] font-medium">
                {card.num}
              </span>
              <h2 className="font-sans text-[18px] leading-6 font-normal text-[#1C1917]">
                {card.title}
              </h2>
              <p className="font-sans text-[13.5px] leading-5 text-[#6B625B]">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <div className="max-w-5xl space-y-4 rounded-3xl border border-[#3D2212]/10 bg-[#EFE8DF]/60 p-6 text-center lg:p-8">
          <h1 className="font-serif text-[24px] leading-7.5 text-[#1C1917] md:text-[28px] lg:text-[30px]">
            Come build with us.
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-[14px] leading-6 text-[#6B625B] lg:text-[16px] lg:leading-6.5">
            As Shelf gets closer to launch, members of the Founding Community
            will have the opportunity to join our closed beta, experience what
            we’re building, share ideas, meet people and help us improve it
            before we open the doors more widely.
          </p>

          <a
            href="https://chat.whatsapp.com/Hfu40HaZEBRIRZTLiigkKg"
            rel="noopener noreferrer"
            target="_blank"
            className="mt-4 inline-block"
          >
            <div className="bg-brand inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 font-sans text-[14px] leading-5 font-bold text-[#E4DBD1] transition hover:opacity-90">
              Join the Founding Community
              <Icon icon="akar-icons:arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
