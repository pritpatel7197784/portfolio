import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Pritesh Patel | Senior Backend & IAM Engineer",
  description:
    "Executive-level portfolio for Pritesh Patel, a Senior Backend and IAM Engineer focused on enterprise identity automation, secure authentication platforms, and distributed systems.",
  openGraph: {
    title: "Pritesh Patel | Senior Backend & IAM Engineer",
    description:
      "Business-focused engineering portfolio showcasing enterprise IAM automation, architecture leadership, and backend platform impact.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pritesh Patel | Senior Backend & IAM Engineer",
    description:
      "Senior Backend and IAM Engineer driving enterprise identity automation and secure authentication platforms."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${plexMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-[family-name:var(--font-sans)]"
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
