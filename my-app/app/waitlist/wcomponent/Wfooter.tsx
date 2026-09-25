import Image from 'next/image';
import { Icon } from '@iconify/react';
import logo from '@/public/Assets/logo.png';

export default function WFooter() {
  return (
    <footer className="border-t border-[#F1ECE4] mt-15 lg:mt-20">
      <div className="max-w-7xl mx-auto py-12 lg:py-16 px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-14 lg:gap-12">
          {/* Brand & Description Column */}
          <div className="lg:col-span-5 space-y-4">
            <Image
              src={logo}
              alt="Shelf logo"
              className="h-8 w-auto object-contain"
            />
            <p className="font-sans text-[#6B625B] text-[14px] leading-relaxed max-w-sm">
              A quieter place to discover African stories, support independent
              writers, and keep good books close.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#3D2212]/15 flex items-center justify-center text-[#1C1917] hover:border-brand hover:text-brand transition-colors"
                aria-label="Instagram"
              >
                <Icon icon="ri:instagram-line" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#3D2212]/15 flex items-center justify-center text-[#1C1917] hover:border-brand hover:text-brand transition-colors"
                aria-label="Twitter X"
              >
                <Icon icon="ri:twitter-x-line" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#3D2212]/15 flex items-center justify-center text-[#1C1917] hover:border-brand hover:text-brand transition-colors"
                aria-label="TikTok"
              >
                <Icon icon="ri:tiktok-line" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#3D2212]/15 flex items-center justify-center text-[#1C1917] hover:border-brand hover:text-brand transition-colors"
                aria-label="Email"
              >
                <Icon icon="lucide:mail" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: EXPLORE */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="uppercase text-[11px] md:text-[12px] leading-4 tracking-[1.2px] font-mono text-brand font-semibold">
              Explore
            </h3>
            <ul className="space-y-3 font-sans text-[14px] text-[#1C1917]">
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  What we do
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="uppercase text-[11px] md:text-[12px] leading-4 tracking-[1.2px] font-mono text-brand font-semibold">
              Company
            </h3>
            <ul className="space-y-3 font-sans text-[14px] text-[#1C1917]">
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Join our community
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: FOLLOW */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="uppercase text-[11px] md:text-[12px] leading-4 tracking-[1.2px] font-mono text-brand font-semibold">
              Follow
            </h3>
            <ul className="space-y-3 font-sans text-[14px] text-[#1C1917]">
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Tiktok
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F1ECE4] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-[13px] text-[#6B625B]">
          <p>&copy; 2026 Shelf Africa. Stories live here.</p>
          <p>Built with care in Lagos &middot; shelf.africa</p>
        </div>
      </div>
    </footer>
  );
}
