'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import logo from '@/public/Assets/logo.png';

export default function WNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF6EF]/95 backdrop-blur-md border-b border-[#E4DBD1] font-sans">
      <div className="mx-auto max-w-7xl px-5 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={logo}
              alt="Shelf logo"
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </div>

          <ul className="hidden md:flex items-center space-x-5 text-[14px] font-medium">
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                For Authors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                For Readers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                Journal
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <button className="bg-brand py-2 md:py-2.75 px-3.5 md:px-4 rounded-full text-[#E4DBD1] text-[13px] md:text-[14px] cursor-pointer hover:opacity-95 transition-opacity">
              Join Waitlist
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#1C1917] p-1 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              <Icon
                icon={isOpen ? 'lucide:x' : 'lucide:menu'}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-[#E4DBD1] bg-[#FAF6EF] px-5 py-6 space-y-4">
          <ul className="space-y-4 font-bold text-[15px] text-[#1C1917]">
            <li>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block hover:text-brand transition-colors"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block hover:text-brand transition-colors"
              >
                For Authors
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block hover:text-brand transition-colors"
              >
                For Readers
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block hover:text-brand transition-colors"
              >
                Journal
              </a>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 border border-[#3D2212]/20 py-2.5 px-4 rounded-full font-bold text-[14px] text-[#1C1917] hover:bg-[#3D2212]/5 transition-colors"
            >
              Join our community{' '}
              <Icon icon="akar-icons:arrow-up-right" className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
