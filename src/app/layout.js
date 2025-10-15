import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: "Talal Portfolio",
  description:
    "Portfolio of a freelance designer & director for film & television.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-main-bg bg-cover bg-fixed font-sans">
        <Navbar />
        <main className="pt-24 lg:pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
