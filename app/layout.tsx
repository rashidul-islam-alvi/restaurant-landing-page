import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Jones BBQ - the best in the town",
  description: "A bbq place to have your family gathering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={anton.className}>
        <Navbar />
        <div className="bg-red-tomato">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
