"use client";

import Image, { StaticImageData } from "next/image";
import design from "@/public/Assets/Design.png";
import finance from "@/public/Assets/finance.png";
import ghiyas from "@/public/Assets/ghiyas.png";
import ghiyas2 from "@/public/Assets/ghiyas2.png";
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
    image: ghiyas2,
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
    image: work,
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
    image: team,
    alt: "Designing the local reader discovery loop preview",
    title: "Designing the local reader discovery loop ",
    description:
      "Rethinking algorithmic recommendations in favor of community book circles across Nigerian universities and writing hubs. ",
    readTime: "8 min read",
    link: "#",
  },
];

export default function Journal() {
  return (
    <section
      id="public"
      className="mx-auto mt-10 max-w-7xl px-5 pt-10 pb-10 lg:mt-15 lg:px-8 lg:pt-3 lg:pb-15"
    >
      <div className="text-center">
        <h1 className="text-brand font-mono text-[12px] leading-4 tracking-[1.2px] uppercase">
          Sharing as we build.
        </h1>
        <h1 className="mt-2 font-serif text-[32px] leading-10 text-[#1C1917] md:text-[40px] md:leading-11 lg:text-[48px] lg:leading-12">
          Our journal
        </h1>
        <p className="mx-auto mt-3 max-w-2xl font-sans text-[15px] leading-6 text-[#6B625B] md:text-[16px] lg:text-[18px] lg:leading-7">
          Behind-the-scenes thoughts, architecture decisions, and handwritten
          field notes from the team building Shelf for African storytellers.
        </p>
      </div>

      <hr className="border-t border-[#3D2212]/10 mt-9 mb-15" />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {journalArticles.map((article) => (
          <div
            key={article.id}
            className="flex w-full flex-col justify-between rounded-2xl border border-[#3D2212]/10 bg-white p-5 lg:p-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-[#EFE8DF] px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-[#1C1917] uppercase lg:text-[11px]">
                  {article.category}
                </span>
                <span className="font-mono text-[11px] text-[#6B625B] lg:text-[12px]">
                  {article.date}
                </span>
              </div>

              <div className="my-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-[#F7F4EF] lg:h-52">
                <Image
                  src={article.image}
                  alt={article.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="mt-3 font-serif text-[20px] leading-7 text-[#1C1917] lg:text-[22px]">
                {article.title}
              </h2>

              <p className="mt-2 mb-6 font-sans text-[9px] leading-relaxed text-[#6B625B] lg:text-[12px]">
                {article.description}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-[#F1ECE4] pt-4">
              <span className="font-mono text-[11px] text-[#6B625B] lg:text-[12px]">
                {article.readTime}
              </span>
              <a
                href={article.link}
                className="font-caveat text-brand flex items-center gap-1 text-[15px] font-bold hover:underline lg:text-[20px]"
              >
                Read note ✍️
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
