import { Icon } from "@iconify/react";

export default function What() {
  return (
    <section
      id="what"
      className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-15"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-brand font-mono text-[12px] leading-4 tracking-[1.2px] uppercase">
          what we do
        </h1>
        <h1 className="font-serif text-[40px] leading-10 tracking-tight text-[#1C1917] md:text-[50px] md:leading-11 lg:text-[68px] lg:leading-15.5 lg:tracking-[-3.5px]">   
          Bringing publishing, discovery and reading together.
        </h1>
        <p className="mx-auto mt-2 max-w-190 font-sans text-[14px] leading-6 text-[#6B625B] md:text-[16px] lg:text-[18px] lg:leading-7">
          There are stories being written every day and readers are constantly
          looking for something new. But getting from{" "}
          <span className="font-bold italic">“I wrote a book”</span> to{" "}
          <span className="font-bold italic">“someone read it”</span> can still
          be harder than it should be. We want to make it easier for those
          stories to find their readers.
        </p>
      </div>

      <div className="mt-10 lg:mt-15">
        <p className="text-center font-serif text-[20px] leading-7 tracking-[-0.5px] text-[#1C1917] md:text-[22px] lg:text-[24px] lg:leading-[29.3px] lg:tracking-[-1px]">
          So we’re building <span className="text-brand italic">Shelf.</span>
        </p>

        {/* card */}
        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-col items-start space-y-2 rounded-2xl border border-[#DCD2C7] bg-white p-6 lg:w-auto lg:p-7">
            <div className="bg-brand/10 flex h-12 w-12 items-center justify-center rounded-2xl">
              <Icon
                icon="griddy-icons:feather"
                className="text-brand h-6 w-6"
              />
            </div>
            <h2 className="font-serif text-[28px] lg:text-[36px]">Publish</h2>
            <p className="max-w-full font-sans text-[14px] leading-[22.8px] text-[#6B625B] lg:max-w-82.5">
              <span className="font-bold">
                Have something worth sharing? Put it on Shelf.
              </span>{" "}
              Publish your books, notes, guides, stories, or other work and make
              them available to the people who need them.
            </p>
          </div>

          <div className="flex w-full flex-col items-start space-y-2 rounded-2xl border border-[#DCD2C7] bg-white p-6 lg:w-auto lg:p-7">
            <div className="bg-brand/10 flex h-12 w-12 items-center justify-center rounded-2xl">
              <Icon icon="lucide:users" className="text-brand h-6 w-6" />
            </div>
            <h2 className="font-serif text-[28px] lg:text-[36px]">Discover</h2>
            <p className="max-w-full font-sans text-[14px] leading-[22.8px] text-[#6B625B] lg:max-w-76">
              <span className="font-bold">
                Find books and writers worth knowing.
              </span>{" "}
              Discover publications from African authors including voices you
              may have never come across before.
            </p>
          </div>

          <div className="flex w-full flex-col items-start space-y-2 rounded-2xl border border-[#DCD2C7] bg-white p-6 lg:w-auto lg:p-7">
            <div className="bg-brand/10 flex h-12 w-12 items-center justify-center rounded-2xl">
              <Icon icon="lucide:book-open" className="text-brand h-6 w-6" />
            </div>
            <h2 className="font-serif text-[28px] lg:text-[36px]">Read</h2>
            <p className="max-w-full font-sans text-[14px] leading-[22.8px] text-[#6B625B] lg:max-w-80">
              <span className="font-bold">
                Buy your books and keep them in one place.
              </span>{" "}
              Shelf gives readers a personal library where their favourite
              stories are always within reach. Read anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
