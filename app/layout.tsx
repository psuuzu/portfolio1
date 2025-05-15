import type { Metadata } from "next";
import { Geist, Geist_Mono, Big_Shoulders_Stencil_Display, Rationale } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bigShoulderStencil = Big_Shoulders_Stencil_Display({
  variable: "--font-big-shoulder-stencil",
  weight: "800",
  subsets: ["latin"],
});

const rationale = Rationale({
  variable: "--rationale",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pauls portfolio",
  description: "built using react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bigShoulderStencil.variable} ${rationale.variable} antialiased bg-black`}
      >
        <Navbar/>
        <main>
          
        </main>
        {children}
      </body>
    </html>
  );
}
