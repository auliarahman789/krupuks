import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Kerupuk Keluarga",
  description: "Kerupuk Cap Keluarga, Belitung Best Cracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
