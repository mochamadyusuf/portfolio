import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

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
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
