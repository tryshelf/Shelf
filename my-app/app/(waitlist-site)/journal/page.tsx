"use client";

import Image, { StaticImageData } from "next/image";
import design from "@/public/Assets/Design.png";
import finance from "@/public/Assets/finance.png";
import ghiyas from "@/public/Assets/ghiyas.png";
import ghiyas2 from "@/public/Assets/ghiyas2.png";
import journal1 from "@/public/Assets/journal1.png";
import journal2 from "@/public/Assets/journal2.png";
import journal3 from "@/public/Assets/journal3.png";
import work from "@/public/Assets/work.png";
import team from "@/public/Assets/team.jpg";

interface JournalArticle {
  id: number;
  category: string;
  date: string;
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  readTime: string;
  link: string;
}

export default function Journal() {
  const journalArticles: JournalArticle[] = [
    {
      id: 1,
      category: "DESIGN NOTES",
      date: "Sept 10, 2026",
      image: design,
      alt: "Crafting a tactile bookshelf interface preview",
      title: "Crafting a tactile bookshelf interface for mobile",
      description:
        "How we designed digital shelves to feel as warm and physical as browsing an independent bookshop in Yaba or Ikeja.",
      readTime: "8 min read",
      link: "#",
    },
    {
      id: 2,
      category: "FINANCE NOTE",
      date: "Aug 21, 2026",
      image: finance,
      alt: "Designing the local reader discovery loop preview",
      title: "Designing the local reader discovery loop",
      description:
        "Rethinking algorithmic recommendations in favor of community book circles across Nigerian universities and writing hubs.",
      readTime: "8 min read",
      link: "#",
    },
    {
      id: 3,
      category: "FINANCE NOTE",
      date: "Aug 21, 2026",
      image: ghiyas,
      alt: "Why we're building Shelf preview",
      title: "Why we’re building Shelf",
      description:
        "Exploring why global publishing platforms fail local creators when the barrier between writing and earning disappears naturally.",
      readTime: "8 min read",
      link: "#",
    },
    {
      id: 4,
      category: "FINANCE NOTE",
      date: "Aug 21, 2026",
      image: journal1,
      alt: "Designing the local reader discovery loop preview",
      title: "Designing the local reader discovery loop ",
      description:
        "Rethinking algorithmic recommendations in favor of community book circles across Nigerian universities and writing hubs. ",
      readTime: "8 min read",
      link: "#",
    },
    {
      id: 5,
      category: "FINANCE NOTE",
      date: "Aug 21, 2026",
      image: journal2,
      alt: "Designing the local reader discovery loop preview",
      title: "Designing the local reader discovery loop ",
      description:
        "Rethinking algorithmic recommendations in favor of community book circles across Nigerian universities and writing hubs. ",
      readTime: "8 min read",
      link: "#",
    },
    {
      id: 6,
      category: "FINANCE NOTE",
      date: "Aug 21, 2026",
      image: journal3,
      alt: "Designing the local reader discovery loop preview",
      title: "Designing the local reader discovery loop ",
      description:
        "Rethinking algorithmic recommendations in favor of community book circles across Nigerian universities and writing hubs. ",
      readTime: "8 min read",
      link: "#",
    },
  ];

  return (
    <section
      id="public"
      className="mx-auto mt-10 max-w-7xl px-5 pt-10 pb-10 lg:mt-15 lg:px-8 lg:pt-3 lg:pb-15"
    >
      <div className="text-center">
        <h1 className="text-brand font-mono text-[12px] leading-4 tracking-[1.2px] uppercase">
          Sharing as we build.
        </h1>
        <h1 className="mt-2 font-serif text-[40px] leading-10 text-[#1C1917] md:text-[50px] md:leading-11 lg:text-[68px] lg:leading-15.5 lg:tracking-[-3.5px]">
          The Shelf Journal
        </h1>
        <p className="mx-auto mt-3 max-w-2xl font-sans text-[15px] leading-6 text-[#6B625B] md:text-[16px] lg:text-[18px] lg:leading-7">
          Behind-the-scenes thoughts, architecture decisions, and handwritten
          field notes from the team building Shelf for African storytellers.
        </p>
      </div>

      <hr className="mt-9 mb-15 border-t border-[#3D2212]/10" />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {journalArticles.map((note) => (
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
                    {note.category}
                  </span>
                  <span className="font-mono text-[11px] text-[#6B625B] lg:text-[12px]">
                    {note.date}
                  </span>
                </div>

                <h2 className="mt-3 font-sans text-[20px] leading-7 font-medium text-[#1C1917] lg:text-[22px]">
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
    </section>
  );
}
