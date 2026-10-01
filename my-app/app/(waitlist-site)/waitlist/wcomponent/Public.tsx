import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import journal1 from "@/public/Assets/journal1.png";
import journal2 from "@/public/Assets/journal2.png";
import journal3 from "@/public/Assets/journal3.png";

interface PublicNote {
  id: number;
  tag: string;
  date: string;
  image: StaticImageData;
  title: string;
  description: string;
  readTime: string;
  link: string;
}

export default function Public() {
  const publicNotes: PublicNote[] = [
    {
      id: 1,
      tag: "FINANCE NOTE",
      date: "Aug 21, 2026",
      image: journal1,
      title: "Crafting a tactile bookshelf interface for mobile",
      description:
        "How we designed digital shelves to feel as warm and physical as browsing an independent bookshop in Yaba or Ikeja.",
      readTime: "8 min read",
      link: "#",
    },
    {
      id: 2,
      tag: "BUILD LOG",
      date: "Aug 21, 2026",
      image: journal2,
      title: "Designing the local reader discovery loop",
      description:
        "Rethinking algorithmic recommendations in favor of community book circles across Nigerian universities and writing hubs.",
      readTime: "8 min read",
      link: "#",
    },
    {
      id: 3,
      tag: "FINANCE NOTE",
      date: "Aug 21, 2026",
      image: journal3,
      title: "Why we’re building Shelf",
      description:
        "Exploring why global publishing platforms fail local creators when the barrier between writing and earning disappears naturally.",
      readTime: "8 min read",
      link: "#",
    },
  ];

  return (
    <section
      id="public"
      className="mx-auto mt-10 max-w-7xl border-t border-[#F1ECE4] px-5 pt-10 pb-10 lg:mt-15 lg:px-8 lg:pt-15 lg:pb-15"
    >
      <div>
        <h1 className="text-brand mb-1.5 font-mono text-[12px] leading-4 tracking-[1.2px] uppercase">
          building in public
        </h1>
        <h1 className="font-serif text-[40px] leading-10 text-[#1C1917] md:text-[50px] md:leading-11 lg:text-[68px] lg:leading-15.5 lg:tracking-[-3.5px]">
          Watch Shelf become real.
        </h1>
        <p className="mt-3 max-w-2xl font-sans text-[15px] leading-6 text-[#6B625B] md:text-[16px] lg:text-[18px] lg:leading-7">
          We’re building Shelf in public , sharing the ideas, experiments,
          decisions and progress along the way.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {publicNotes.map((note) => (
          <div
            key={note.id}
            className="flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-[#3D2212]/10 bg-white"
          >
            <div className="h-48 w-full overflow-hidden bg-[#F7F4EF] lg:h-52">
              <Image
                src={note.image}
                alt={`${note.title} preview`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-5 lg:p-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-[#EFE8DF] px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-[#6B625B] uppercase lg:text-[11px]">
                    {note.tag}
                  </span>
                  <span className="font-mono text-[11px] text-[#6B625B] lg:text-[12px]">
                    {note.date}
                  </span>
                </div>

                <h2 className="mt-3 font-sans text-[20px] font-medium leading-7 text-[#1C1917] lg:text-[22px]">
                  {note.title}
                </h2>

                <p className="mt-2 font-sans text-[13px] leading-relaxed text-[#6B625B] lg:text-[14px]">
                  {note.description}
                </p>
              </div>

              <div className="mt-2.5 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#6B625B] lg:text-[12px]">
                  {note.readTime}
                </span>
                <a
                  href={note.link}
                  className="font-caveat text-brand flex items-center gap-1 text-[20px] font-bold hover:underline lg:text-[22px]"
                >
                  Read note ✍️
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 lg:mt-12">
        <Link
          href="/journal"
          className="text-brand inline-flex items-center gap-2 font-sans text-[15px] font-bold hover:underline"
        >
          Follow the Build{" "}
          <Icon icon="lucide:arrow-right" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

