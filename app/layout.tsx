import type { Metadata } from "next";
import { EB_Garamond, Figtree } from "next/font/google";
import GrainOverlay from "@/components/GrainOverlay";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Who?",
  description:
    "Who? turns follower noise into signal. See who noticed you and why they matter — across X, Instagram, TikTok, and more.",
  keywords: ["followers", "social media", "social intelligence", "X", "Instagram", "TikTok", "creator tools"],
  openGraph: {
    title: "Who? — Know who just followed you",
    description:
      "Who? turns follower noise into signal. See who noticed you and why they matter — across every platform.",
    siteName: "Who?",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who? — Know who just followed you",
    description:
      "Turn follower noise into signal. See who noticed you and why they matter.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${garamond.variable} scroll-smooth`}>
      <body
        className="relative min-h-screen antialiased"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
        <GrainOverlay />
        {/* Bottom fade */}
        <div
          className="fixed inset-x-0 bottom-0 h-16 pointer-events-none z-50"
          style={{ background: "linear-gradient(to top, var(--color-cream), transparent)" }}
        />
      </body>
    </html>
  );
}
