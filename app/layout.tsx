import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "./globals.css";

const uncutSans = localFont({
  src: "../assets/fonts/UncutSans-Variable.woff2",
  variable: "--font-uncut-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StatCraft — Thesis Statistics & Math Tutoring",
  description:
    "We handle statistical analysis, data cleaning, and write-up for Filipino thesis students — plus 1-on-1 math tutoring.",
  openGraph: {
    title: "StatCraft — Thesis Statistics & Math Tutoring",
    description:
      "We handle statistical analysis, data cleaning, and write-up for Filipino thesis students — plus 1-on-1 math tutoring.",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${uncutSans.variable} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
