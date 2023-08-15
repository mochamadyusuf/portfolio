import Navbar from "@/components/Fragments/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="lg:px-36">
      <body className={inter.className}>
        <header className="relative mb-10 md:mb-28 lg:mb-6">
          <Navbar className="navbar z-10 fixed top-0 flex-row-reverse shadow-md bg-white md:py-6 lg:shadow-none lg:flex-row lg:gap-64 lg:pt-8 lg:left-36 lg:right-36 lg:w-auto" />
        </header>
        {children}
      </body>
    </html>
  );
}
