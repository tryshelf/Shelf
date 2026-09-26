'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import logo from '@/public/Assets/logo.png';

export default function WNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E4DBD1] bg-[#FAF6EF]/95 font-sans backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Link href="/waitlist">
            <Image
              src={logo}
              alt="Shelf logo"
              className="h-8 w-auto object-contain md:h-10 cursor-pointer"
              priority
            />
          </Link>

          <ul className="hidden items-center space-x-5 text-[14px] font-medium md:flex">
            <li>
              <Link href="/waitlist#how" className="hover:text-brand transition-colors">
                How it works
              </Link>
            </li>
            <li>
              <Link href="/waitlist#how" className="hover:text-brand transition-colors">
                For Authors
              </Link>
            </li>
            <li>
              <Link href="/waitlist#how" className="hover:text-brand transition-colors">
                For Readers
              </Link>
            </li>
            <li>
              <Link href="/journal" className="hover:text-brand transition-colors">
                Journal
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/waitlist#home"
              className="bg-brand cursor-pointer rounded-full px-3.5 py-2 text-[13px] text-[#E4DBD1] transition-opacity hover:opacity-95 md:px-4 md:py-2.75 md:text-[14px]"
            >
              Join Waitlist
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer p-1 text-[#1C1917] focus:outline-none md:hidden"
              aria-label="Toggle Menu"
            >
              <Icon
                icon={isOpen ? "lucide:x" : "lucide:menu"}
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="space-y-4 border-t border-[#E4DBD1] bg-[#FAF6EF] px-5 py-6 md:hidden">
          <ul className="space-y-4 text-[15px] font-normal text-[#1C1917]">
            <li>
              <Link
                href="/waitlist#how"
                onClick={() => setIsOpen(false)}
                className="hover:text-brand block transition-colors"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                href="/waitlist#how"
                onClick={() => setIsOpen(false)}
                className="hover:text-brand block transition-colors"
              >
                For Authors
              </Link>
            </li>
            <li>
              <Link
                href="/waitlist#how"
                onClick={() => setIsOpen(false)}
                className="hover:text-brand block transition-colors"
              >
                For Readers
              </Link>
            </li>
            <li>
              <Link
                href="/journal"
                onClick={() => setIsOpen(false)}
                className="hover:text-brand block transition-colors"
              >
                Journal
              </Link>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="https://chat.whatsapp.com/Hfu40HaZEBRIRZTLiigkKg"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-[#3D2212]/20 px-4 py-2.5 text-[14px] font-bold text-[#1C1917] transition-colors hover:bg-[#3D2212]/5"
            >
              Join our community{" "}
              <Icon icon="akar-icons:arrow-up-right" className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

