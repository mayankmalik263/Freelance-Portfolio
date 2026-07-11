import type { Metadata } from "next";
import { Inter, VT323, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mayank Malik | Full-Stack AI Developer & Automation Builder",
  description: "I'm a Full-Stack AI Developer building web apps and AI-powered automations end to end.",
  openGraph: {
    title: "Mayank Malik | Full-Stack AI Developer & Automation Builder",
    description: "I'm a Full-Stack AI Developer building web apps and AI-powered automations end to end.",
    type: "website",
  }
};

import SoundWrapper from "@/components/SoundWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${vt323.variable} ${pressStart.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-blue/30 selection:text-midnight">
        <SoundWrapper />
        {children}
      </body>
    </html>
  );
}
