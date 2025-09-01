"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import Teaser from "./Teaser";
import LinkGrid from "./LinkGrid";

export default function Footer({ blok }) {
  if (!blok) return null;
  return (
    <footer
      {...storyblokEditable(blok)}
      className="w-full bg-blue-900 text-white py-10 mt-12"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 justify-between items-start">
        <div className="flex flex-col gap-6 md:w-1/3 w-full text-black">
          {Array.isArray(blok.teaser) &&
            blok.teaser.map((teaserBlok) => (
              <Teaser
                blok={teaserBlok}
                key={teaserBlok._uid}
              />
            ))}
          <form
            className="flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l bg-white text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex flex-1 gap-8 justify-end w-full">
          {blok.columns &&
            blok.columns.map((col, idx) => (
              <LinkGrid
                blok={col}
                key={col._uid || idx}
              />
            ))}
        </div>
      </div>
    </footer>
  );
}
