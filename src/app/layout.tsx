import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayank Malik | Freelance Website and Automation Developer",
  description: "I build high-end websites, online booking systems, and WhatsApp automations for small businesses in India. Turn clicks into customers.",
  openGraph: {
    title: "Mayank Malik | Freelance Website & Automation Developer",
    description: "I build high-end websites, online booking systems, and AI automations.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-accent/30 selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
