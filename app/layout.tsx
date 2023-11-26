import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuttayos Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative flex flex-col`}>
        <div className="absolute w-3/4 z-30 left-1/2 -translate-x-2/4">
          <header className="flex justify-between border-[#E63946] border-b-4 py-4">
            <div>
              <h2>My Profile</h2>
            </div>
            <ul className="flex gap-x-4">
              <li>project</li>
              <li>contact me</li>
              <li>github</li>
            </ul>
          </header>
          {children}
        </div>
        <div className="h-14 bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE]"></div>
        <div className="h-28 bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] clip-path-wave"></div>
        <div className="h-64"></div>
        <div className="h-64 bg-white clip-path-wave"></div>
        <div className="h-28 bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] -mt-28"></div>
        <div className="h-28 bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] clip-path-wave"></div>
      </body>
    </html>
  );
}
