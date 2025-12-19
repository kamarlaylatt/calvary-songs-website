import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Calvary Songs - Christian Hymns & Worship Songs Collection",
    template: "%s | Calvary Songs"
  },
  description: "Discover thousands of Christian songs, hymns, praise and worship music in one place. Search, browse, and sing along with your favorite spiritual songs anywhere, anytime.",
  keywords: ["christian songs", "hymns", "worship songs", "praise music", "spiritual songs", "gospel music", "church songs", "calvary songs", "songbook"],
  authors: [{ name: "Calvary Songs" }],
  creator: "Calvary Songs",
  publisher: "Calvary Songs",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Calvary Songs",
    title: "Calvary Songs - Christian Hymns & Worship Songs Collection",
    description: "Discover thousands of Christian songs, hymns, praise and worship music in one place. Search, browse, and sing along with your favorite spiritual songs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calvary Songs - Christian Hymns & Worship Songs Collection",
    description: "Discover thousands of Christian songs, hymns, praise and worship music in one place.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f59e0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
