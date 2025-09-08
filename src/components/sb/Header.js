"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import LinkGrid from "./LinkGrid";
import { cn } from "@/utils/cn";

export default function Header({ blok,darkNavbar }) {
  return (
    <header
      {...storyblokEditable(blok)}
      className={cn("sticky top-0 z-50 border-b border-gray-200 bg-[#fbd6e1]",{"bg-black text-white" : darkNavbar})}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-2 md:flex-row items-center px-4 py-2">
        {/* Logo */}
        {blok.logo && blok.logo.filename && (
          <img
            src={blok.logo.filename}
            alt="Logo"
            width={70}
            height={70}
            className="object-contain mr-4 hover:scale-110 cursor-pointer transition-transform duration-300"
          />
        )}

        {/* Navigation (LinkGrid) */}
        {Array.isArray(blok.linkgrid) &&
          blok.linkgrid.length > 0 && (
            <nav className="flex-1">
              <LinkGrid whiteText={darkNavbar} blok={blok.linkgrid[0]} className="font-extrabold" />
            </nav>
          )}

        {/* Search bar placeholder */}
        <div className="ml-auto flex items-center gap-4">
          <input
            type="text"
            placeholder={
              blok.search_placeholder ||
              "Search..."
            }
            className="px-3 py-2 rounded border-2 border-[#d98ba3] bg-[#fefefeb0] focus:outline-none"
            disabled
          />
          {/* Shopping cart placeholder */}
          <div className="w-10 h-10 bg-[#d98ba3] rounded flex items-center justify-center hover:bg-[#eab5c2]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
              <path d="M2 3h3l3.6 12.59a2 2 0 0 0 2 1.41h7.7a2 2 0 0 0 2-1.6L22 7H6" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
