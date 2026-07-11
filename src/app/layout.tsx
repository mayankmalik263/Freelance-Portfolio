import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${space.variable} ${jetbrains.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-blue/30 selection:text-midnight">
        {children}
      </body>
    </html>
  );
}
