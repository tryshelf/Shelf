import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import logo from "@/public/Assets/logo.png";

export default function WFooter() {
  return (
    <footer className="mt-15 border-t border-[#F1ECE4] lg:mt-20">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand & Description Column */}
          <div className="space-y-4 lg:col-span-5">
            <Link href="/waitlist">
              <Image
                src={logo}
                alt="Shelf logo"
                className="h-8 w-auto object-contain cursor-pointer"
              />
            </Link>
            <p className="max-w-sm font-sans text-[14px] leading-relaxed text-[#6B625B]">
              A quieter place to discover African stories, support independent
              writers, and keep good books close.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/shelfafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-brand hover:text-brand flex h-9 w-9 items-center justify-center rounded-full border border-[#3D2212]/15 text-[#1C1917] transition-colors"
                aria-label="Instagram"
              >
                <Icon icon="ri:instagram-line" className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/shelfafrica_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-brand hover:text-brand flex h-9 w-9 items-center justify-center rounded-full border border-[#3D2212]/15 text-[#1C1917] transition-colors"
                aria-label="Twitter X"
              >
                <Icon icon="ri:twitter-x-line" className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@shelfafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-brand hover:text-brand flex h-9 w-9 items-center justify-center rounded-full border border-[#3D2212]/15 text-[#1C1917] transition-colors"
                aria-label="TikTok"
              >
                <Icon icon="ri:tiktok-line" className="h-4 w-4" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tryshelf@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-brand hover:text-brand flex h-9 w-9 items-center justify-center rounded-full border border-[#3D2212]/15 text-[#1C1917] transition-colors"
                aria-label="Email"
              >
                <Icon icon="lucide:mail" className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: EXPLORE */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-brand font-mono text-[11px] leading-4 font-semibold tracking-[1.2px] uppercase md:text-[12px]">
              Explore
            </h3>
            <ul className="space-y-3 font-sans text-[14px] text-[#1C1917]">
              <li>
                <Link href="/waitlist#what" className="hover:text-brand transition-colors">
                  What we do
                </Link>
              </li>
              <li>
                <Link href="/waitlist#how" className="hover:text-brand transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/waitlist#faq" className="hover:text-brand transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/waitlist#home" className="hover:text-brand transition-colors">
                  Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-brand font-mono text-[11px] leading-4 font-semibold tracking-[1.2px] uppercase md:text-[12px]">
              Company
            </h3>
            <ul className="space-y-3 font-sans text-[14px] text-[#1C1917]">
              <li>
                <Link
                  href="/journal"
                  className="hover:text-brand transition-colors"
                >
                  Journal
                </Link>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/Hfu40HaZEBRIRZTLiigkKg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  Join our community
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: FOLLOW */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-brand font-mono text-[11px] leading-4 font-semibold tracking-[1.2px] uppercase md:text-[12px]">
              Follow
            </h3>
            <ul className="space-y-3 font-sans text-[14px] text-[#1C1917]">
              <li>
                <a
                  href="https://www.instagram.com/shelfafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/shelfafrica_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@shelfafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  Tiktok
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/shelfafrica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#F1ECE4] pt-6 font-sans text-[13px] text-[#6B625B] md:flex-row">
          <p>&copy; 2026 Shelf Africa. Stories live here.</p>
          <p>Built with care in Lagos &middot; shelf.africa</p>
        </div>
      </div>
    </footer>
  );
}
