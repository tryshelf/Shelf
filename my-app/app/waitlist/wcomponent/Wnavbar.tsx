import Image from 'next/image';
import logo from '@/public/Assets/logo.png';

export default function WNavbar() {
  return (
    <nav className="border-b border-[#E4DBD1] font-sans">
      <div className="mx-auto max-w-7xl px-5 py-5">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={logo}
              alt="Shelf logo"
              className="h-10 w-auto object-contain"
              priority
            />
          </div>

          <ul className="flex items-center space-x-5 text-[14px] font-medium ">
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">For Authors</a>
            </li>
            <li>
              <a href="#">For Readers</a>
            </li>
            <li>
              <a href="#">Journal</a>
            </li>
          </ul>

          <button className="bg-brand py-2.75 px-4 rounded-full text-[#E4DBD1] text-[14px] cursor-pointer">
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
