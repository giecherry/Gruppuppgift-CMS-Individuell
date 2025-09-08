import {
  Geist,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import StoryBlokProvider from "@/components/StoryBlokProvider";
import Header from "@/components/sb/Header";
import Footer from "@/components/sb/Footer";
import Layout from "@/components/sb/Layout";
import { headers } from "next/headers";

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

export default async function RootLayout({ children }) {
  const h = headers()
  const pathName = h.get('x-pathname') || "/";
  console.log("Pathname", pathName)
  return (
    <StoryBlokProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Layout pathName={pathName}>{children}</Layout>
        </body>
      </html>
    </StoryBlokProvider>
  );
}
