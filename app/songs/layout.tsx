import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Songs - Calvary Songs",
  description: "Browse and search thousands of Christian hymns, worship songs, and praise music. Find songs by title, lyrics, category, or song number.",
  keywords: "christian songs, hymns, worship songs, praise music, spiritual songs, gospel music, church songs, calvary songs",
};

export default function SongsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
