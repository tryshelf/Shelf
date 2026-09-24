import type { Metadata } from 'next';
import { Instrument_Serif, DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  variable: '--font-instrument-serif',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  weight: '400',
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const dmMono = DM_Mono({
  weight: '400',
  variable: '--font-dm-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shelf',
  description:
    'Shelf is a publishing and reading platform being built from Africa.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
