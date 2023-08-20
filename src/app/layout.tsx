import Navbar from "@/components/Fragments/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Fragments/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Portfolio | Mochamad Yusuf",
  description: "Web Portfolio by Mochamad Yusuf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="relative mb-10 md:mb-28 lg:mb-6">
          <Navbar className="navbar z-10 fixed top-0 flex-row-reverse justify-center shadow-md bg-white md:py-6 lg:shadow-none lg:flex-row lg:gap-64 lg:pt-8 lg:w-full" />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
