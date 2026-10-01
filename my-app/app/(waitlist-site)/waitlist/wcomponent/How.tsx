import Image from "next/image";
import Hauthors from "@/public/Assets/Hauthors.png";
import Hreaders from "@/public/Assets/Hreaders.png";

export default function How() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-15">
      <div className="space-y-2 text-center">
        <h1 className="text-brand font-mono text-[12px] leading-4 tracking-[1.2px] uppercase">
          how it works
        </h1>
        <h1 className="font-serif text-[40px] leading-10 text-[#1C1917] md:text-[50px] md:leading-11 lg:text-[68px] lg:leading-15.5 lg:tracking-[-3.5px]">
          Two sides. One Shelf.
        </h1>
        <p className="mx-auto mt-4 max-w-190 font-sans text-[15px] leading-6 text-[#6B625B] md:text-[16px] lg:text-[18px] lg:leading-7">
          Whether you write or read, Shelf connects the people creating stories
          with the people who want to read them.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-stretch gap-6 lg:mt-14 lg:flex-row lg:justify-between lg:gap-8">
        {/* Card 1 - For Authors */}
        <div className="flex w-full flex-col justify-between rounded-3xl border border-[#3D2212]/10 bg-[#EFE8DF]/50 p-6 lg:w-1/2 lg:p-9">
          <div>
            <div className="bg-brand w-fit rounded-full px-3 py-1 font-mono text-[10px] leading-4 tracking-[2.2px] text-white uppercase lg:text-[12px]">
              FOR AUTHORS
            </div>
            <h2 className="mt-4 font-sans text-[28px] leading-8 text-[#1C1917] md:text-[28px] lg:text-[30px]">
              Publish. Reach. Earn.
            </h2>

            <div className="my-3 flex items-center justify-center overflow-hidden lg:my-6">
              <Image
                src={Hauthors}
                alt="Author dashboard preview"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-5 lg:space-y-6">
            <div className="flex items-start gap-3.5">
              <div className="bg-brand mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-white">
                1
              </div>
              <div>
                <h3 className="font-sans text-[14px] leading-5 font-bold text-[#1C1917] lg:text-[14px]">
                  Publish
                </h3>
                <p className="mt-0.5 font-sans text-[12px] leading-snug text-[#6B625B] lg:text-[12px]">
                  Upload your book, add the details, set your price and publish
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="bg-brand mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-white">
                2
              </div>
              <div>
                <h3 className="font-sans text-[14px] leading-5 font-bold text-[#1C1917] lg:text-[14px]">
                  Reach
                </h3>
                <p className="mt-0.5 font-sans text-[12px] leading-snug text-[#6B625B] lg:text-[12px]">
                  Get your books in front of readers looking for their next
                  story.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="bg-brand mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-white">
                3
              </div>
              <div>
                <h3 className="font-sans text-[14px] leading-5 font-bold text-[#1C1917] lg:text-[14px]">
                  Get Paid Directly to Bank
                </h3>
                <p className="mt-0.5 font-sans text-[12px] leading-snug text-[#6B625B] lg:text-[12px]">
                  Earn from every sale of your book.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - For Readers */}
        <div className="flex w-full flex-col justify-between rounded-3xl border border-[#3D2212]/10 bg-[#FAF7F2] p-6 lg:w-1/2 lg:p-9">
          <div>
            <div className="w-fit rounded-full bg-[#3D2212] px-3 py-1 font-mono text-[10px] tracking-[2.2px] text-[#E4DBD1] uppercase lg:text-[12px]">
              FOR READERS
            </div>
            <h2 className="mt-4 font-sans text-[28px] leading-tight text-[#1C1917] md:text-[28px] lg:text-[30px]">
              Discover. Buy. Read.
            </h2>

            <div className="my-6 flex items-center justify-center overflow-hidden lg:my-6">
              <Image
                src={Hreaders}
                alt="Reader view preview"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-5 lg:space-y-6">
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3D2212] text-[12px] font-semibold text-white">
                1
              </div>
              <div>
                <h3 className="font-sans text-[14px] leading-5 font-bold text-[#1C1917] lg:text-[14px]">
                  Discover
                </h3>
                <p className="mt-0.5 font-sans text-[12px] leading-snug text-[#6B625B] lg:text-[12px]">
                  Find books, authors and stories across genres.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3D2212] text-[12px] font-semibold text-white">
                2
              </div>
              <div>
                <h3 className="font-sans text-[14px] leading-5 font-bold text-[#1C1917] lg:text-[14px]">
                  Buy
                </h3>
                <p className="mt-0.5 font-sans text-[12px] leading-snug text-[#6B625B] lg:text-[12px]">
                  Choose a book you want and purchase it directly on Shelf.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3D2212] text-[12px] font-semibold text-white">
                3
              </div>
              <div>
                <h3 className="font-sans text-[14px] leading-5 font-bold text-[#1C1917] lg:text-[14px]">
                  Read
                </h3>
                <p className="mt-0.5 font-sans text-[12px] leading-snug text-[#6B625B] lg:text-[12px]">
                  Access your purchased books and start reading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
