import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoryBlokProvider from "@/components/StoryBlokProvider";
import Header from "@/components/sb/Header";
import Footer from "@/components/Footer";

//TO DO: Layout for pages + detail pages
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shop",
  description: "Storyblok + Next.js shop",
};

export default function RootLayout({ children }) {
  return (
    <StoryBlokProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </StoryBlokProvider>
  );
}
