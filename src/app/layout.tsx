import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollRestoration from "./components/layout/ScrollRestoration";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Elevare | Marketing Agency",
  description: "Elevating brands through innovative marketing solutions. We help businesses grow with data-driven strategies and creative excellence.",
  keywords: ["marketing agency", "digital marketing", "brand strategy", "web development", "content marketing", "social media marketing", "SEO"],
  authors: [{ name: "Elevare Marketing Agency" }],
  openGraph: {
    title: "Elevare | Marketing Agency",
    description: "Elevating brands through innovative marketing solutions. We help businesses grow with data-driven strategies and creative excellence.",
    url: "https://elevare.vercel.app",
    siteName: "Elevare",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevare | Marketing Agency",
    description: "Elevating brands through innovative marketing solutions.",
    creator: "@elevare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-gray-950 text-gray-100`}>
        <div className="min-h-screen flex flex-col">
          <ScrollRestoration />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
