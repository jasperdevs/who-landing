import type { Metadata } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const body = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Who?",
  description:
    "Who? turns follower noise into signal. See who noticed you and why they matter — across X, Instagram, TikTok, and more.",
  keywords: [
    "followers",
    "social media",
    "social intelligence",
    "X",
    "Instagram",
    "TikTok",
    "creator tools",
  ],
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
    <html
      lang="en"
      className={`${display.variable} ${body.variable} scroll-smooth`}
    >
      <body
        className="relative min-h-screen antialiased"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </body>
    </html>
  );
}
