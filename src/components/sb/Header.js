"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import LinkGrid from "./LinkGrid";

export default function Header({ blok }) {
  return (
    <header
      {...storyblokEditable(blok)}
      className="sticky top-0 z-50 border-b border-gray-200 bg-blue-50"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-2 md:flex-row items-center px-4 py-2">
        {/* Logo */}
        {blok.logo && blok.logo.filename && (
          <img
            src={blok.logo.filename}
            alt="Logo"
            width={40}
            height={40}
            className="object-contain mr-4"
          />
        )}

        {/* Navigation (LinkGrid) */}
        {blok.linkgrid && (
          <nav className="flex-1">
            <LinkGrid blok={blok.linkgrid} />
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
            className="px-3 py-2 rounded border border-gray-300 focus:outline-none"
            disabled
          />
          {/* Shopping cart placeholder */}
          <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
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
