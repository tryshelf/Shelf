import Image from 'next/image';
import Hauthors from '@/public/Assets/Hauthors.png';
import Hreaders from '@/public/Assets/Hreaders.png';

export default function How() {
  return (
    <section className="max-w-7xl mx-auto py-10 lg:py-15 px-5 lg:px-8">
      <div className="text-center space-y-2">
        <h1 className="uppercase text-[12px] leading-4 tracking-[1.2px] font-mono text-brand">
          how it works
        </h1>
        <h1 className="font-serif text-[#1C1917] text-[32px] md:text-[40px] lg:text-[48px] leading-10 md:leading-11 lg:leading-12">
          Two sides. One Shelf.
        </h1>
        <p className="font-sans text-[#6B625B] leading-6 lg:leading-7 text-[15px] md:text-[16px] lg:text-[18px] max-w-190 mx-auto mt-4">
          Whether you write or read, Shelf connects the people creating stories
          with the people who want to read them.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between items-stretch gap-6 lg:gap-8 mt-10 lg:mt-14">
        {/* Card 1 - For Authors */}
        <div className="w-full lg:w-1/2 p-6 lg:p-9 rounded-3xl border border-[#3D2212]/10 bg-[#EFE8DF]/50 flex flex-col justify-between">
          <div>
            <div className="px-3 py-1 bg-brand text-white font-mono text-[10px] leading-4 lg:text-[12px] uppercase tracking-[2.2px] rounded-full w-fit">
              FOR AUTHORS
            </div>
            <h2 className="font-serif text-[#1C1917] text-[28px] md:text-[28px] lg:text-[30px] leading-8 mt-4">
              Publish. Reach. Earn.
            </h2>

            <div className="my-3 lg:my-6 flex justify-center items-center overflow-hidden">
              <Image
                src={Hauthors}
                alt="Author dashboard preview"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="space-y-5 lg:space-y-6">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center text-[12px] font-semibold shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-sans leading-[20px] font-bold text-[10px] lg:text-[14px] text-[#1C1917]">
                  Publish
                </h3>
                <p className="font-sans text-[9px] lg:text-[12px] text-[#6B625B] leading-snug mt-0.5">
                  Upload your book, add the details, set your price and publish
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center text-[12px] font-semibold shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-sans leading-[20px] font-bold text-[10px] lg:text-[14px] text-[#1C1917]">
                  Reach
                </h3>
                <p className="font-sans text-[9px] lg:text-[12px] text-[#6B625B] leading-snug mt-0.5">
                  Get your books in front of readers looking for their next
                  story.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center text-[12px] font-semibold shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-sans leading-[20px] font-bold text-[10px] lg:text-[14px] text-[#1C1917]">
                  Get Paid Directly to Bank
                </h3>
                <p className="font-sans text-[9px] lg:text-[12px] text-[#6B625B] leading-snug mt-0.5">
                  Earn from every sale of your book.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - For Readers */}
        <div className="w-full lg:w-1/2 p-6 lg:p-9 rounded-3xl border border-[#3D2212]/10 bg-[#FAF7F2] flex flex-col justify-between">
          <div>
            <div className="px-3 py-1 bg-[#3D2212] text-[#E4DBD1] font-mono text-[10px] lg:text-[12px] uppercase tracking-[2.2px] rounded-full w-fit">
              FOR READERS
            </div>
            <h2 className="font-serif text-[#1C1917] text-[28px] md:text-[28px] lg:text-[30px] leading-tight mt-4">
              Discover. Buy. Read.
            </h2>

            <div className="my-6 lg:my-6 flex justify-center items-center overflow-hidden">
              <Image
                src={Hreaders}
                alt="Reader view preview"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="space-y-5 lg:space-y-6">
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-[#3D2212] text-white flex items-center justify-center text-[12px] font-semibold shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-sans leading-[20px] font-bold text-[10px] lg:text-[14px] text-[#1C1917]">
                  Discover
                </h3>
                <p className="font-sans text-[9px] lg:text-[12px] text-[#6B625B] leading-snug mt-0.5">
                  Find books, authors and stories across genres.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-[#3D2212] text-white flex items-center justify-center text-[12px] font-semibold shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-sans leading-[20px] font-bold text-[10px] lg:text-[14px] text-[#1C1917]">
                  Buy
                </h3>
                <p className="font-sans text-[9px] lg:text-[12px] text-[#6B625B] leading-snug mt-0.5">
                  Choose a book you want and purchase it directly on Shelf.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-[#3D2212] text-white flex items-center justify-center text-[12px] font-semibold shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-sans leading-[20px] font-bold text-[10px] lg:text-[14px] text-[#1C1917]">
                  Read
                </h3>
                <p className="font-sans text-[9px] lg:text-[12px] text-[#6B625B] leading-snug mt-0.5">
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
