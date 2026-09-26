import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal | Shelf",
  description: "Behind-the-scenes thoughts from the team building Shelf.",
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
