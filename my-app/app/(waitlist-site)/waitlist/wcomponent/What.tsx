import { Icon } from "@iconify/react";

export default function What() {
  return (
    <section id="what" className="max-w-7xl mx-auto py-10 lg:py-15 px-5 lg:px-8">
      <div className="text-center space-y-2">
        <h1 className="uppercase text-[12px] leading-4 tracking-[1.2px] font-mono text-brand">
          what we do
        </h1>
        <h1 className="font-serif text-[#1C1917] text-[32px] md:text-[40px] lg:text-[48px] leading-10 md:leading-11 lg:leading-12">
          Bringing publishing, discovery and reading together.
        </h1>
        <p className="font-sans text-[#6B625B] leading-6 lg:leading-7 text-[15px] md:text-[16px] lg:text-[18px] max-w-190 mx-auto mt-4">
          There are stories being written every day and readers are constantly
          looking for something new. But getting from{' '}
          <span className="font-bold italic">“I wrote a book”</span> to{' '}
          <span className="font-bold italic">“someone read it”</span> can still
          be harder than it should be. We want to make it easier for those
          stories to find their readers.
        </p>
      </div>

      <div className="mt-10 lg:mt-15">
        <p className="font-serif leading-7 lg:leading-[29.3px] tracking-[-0.5px] lg:tracking-[-1px] text-[20px] md:text-[22px] lg:text-[24px] text-center text-[#1C1917]">
          So we’re building <span className="text-brand italic">Shelf.</span>
        </p>

        {/* card */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 mt-5">
          <div className="w-full lg:w-auto flex flex-col items-start p-6 lg:p-7 space-y-2 rounded-2xl bg-white border border-[#DCD2C7]">
            <div className="rounded-2xl h-12 w-12 bg-brand/10 flex items-center justify-center">
              <Icon
                icon="griddy-icons:feather"
                className="w-6 h-6 text-brand"
              />
            </div>
            <h2 className="text-[28px] lg:text-[36px] font-serif">Publish</h2>
            <p className="font-sans text-[14px] leading-[22.8px] text-[#6B625B] max-w-full lg:max-w-82.5">
              <span className="font-bold">
                Have something worth sharing? Put it on Shelf.
              </span>{' '}
              Publish your books, notes, guides, stories, or other work and make
              them available to the people who need them.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col items-start p-6 lg:p-7 space-y-2 rounded-2xl bg-white border border-[#DCD2C7]">
            <div className="rounded-2xl h-12 w-12 bg-brand/10 flex items-center justify-center">
              <Icon icon="lucide:users" className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-[28px] lg:text-[36px] font-serif">Discover</h2>
            <p className="font-sans text-[14px] leading-[22.8px] text-[#6B625B] max-w-full lg:max-w-76">
              <span className="font-bold">
                Find books and writers worth knowing.
              </span>{' '}
              Discover publications from African authors including voices you
              may have never come across before.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col items-start p-6 lg:p-7 space-y-2 rounded-2xl bg-white border border-[#DCD2C7]">
            <div className="rounded-2xl h-12 w-12 bg-brand/10 flex items-center justify-center">
              <Icon icon="lucide:book-open" className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-[28px] lg:text-[36px] font-serif">Read</h2>
            <p className="font-sans text-[14px] leading-[22.8px] text-[#6B625B] max-w-full lg:max-w-80">
              <span className="font-bold">
                Buy your books and keep them in one place.
              </span>{' '}
              Shelf gives readers a personal library where their favourite
              stories are always within reach. Read anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
