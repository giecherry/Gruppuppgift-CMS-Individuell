"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { cn } from "@/utils/cn";
import NextLink from "next/link";
import React from "react";

const menuData = [
  { label: "About us", href: "/about-me" },
  {
    label: "Products",
    children: [
      {
        label: "Men",
        href: "/shop",
        children: [
          {
            label: "Sweaters",
            href: "/products/men/sweaters",
          },
          {
            label: "Tops",
            href: "/products/men/tops",
          },
          {
            label: "Jackets",
            href: "/products/men/jackets",
          },
          {
            label: "Bags",
            href: "/products/men/bags",
          },
        ],
      },
      {
        label: "Women",
        href: "/shop",
        children: [
          {
            label: "Sweaters",
            href: "/products/women/sweaters",
          },
          {
            label: "Tops",
            href: "/products/women/tops",
          },
          {
            label: "Jackets",
            href: "/products/women/jackets",
          },
          {
            label: "Bags",
            href: "/products/women/bags",
          },
        ],
      },
      {
        label: "Kids",
        href: "/shop",
        children: [
          {
            label: "Sweaters",
            href: "/products/kids/sweaters",
          },
          {
            label: "Tops",
            href: "/products/kids/tops",
          },
          {
            label: "Jackets",
            href: "/products/kids/jackets",
          },
          {
            label: "Bags",
            href: "/products/kids/bags",
          },
        ],
      },
    ],
  },
];

function MenuItems({ items }) {
  return (
    <ul className="header-menu-root">
      {items.map((item) => (
        <li
          key={item.label}
          className="header-menu-item relative hover:bg-[#fbd6e1]"
        >
          {item.href ? (
            <NextLink
              href={item.href}
              className="header-menu-link rounded"
            >
              {item.label}
            </NextLink>
          ) : (
            <span className="header-menu-link rounded">
              {item.label}
            </span>
          )}
          {item.children && (
            <MenuItems items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Header({
  blok,
  darkNavbar,
}) {
  return (
    <header
      {...storyblokEditable(blok)}
      className={cn(
        "sticky top-0 z-50 border-b border-gray-200 bg-[#fbd6e1]",
        { "bg-black text-white": darkNavbar }
      )}
    >
      {/* Use the same container as Footer */}
      <div className="container mx-auto px-4 flex flex-col gap-2 md:flex-row items-center py-2">
        {/* Logo */}
        {blok.logo && blok.logo.filename && (
          <NextLink href="/home" passHref>
            <img
              src={blok.logo.filename}
              alt="Logo"
              width={70}
              height={70}
              className="object-contain mr-4 hover:scale-110 cursor-pointer transition-transform duration-300"
            />
          </NextLink>
        )}

        {/* Multi-level menu */}
        <nav>
          <MenuItems items={menuData} />
        </nav>

        {/* Search bar */}
        <div className="flex flex-1 items-center gap-4 ml-2">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* Search icon SVG */}
              <svg
                className="w-5 h-5 text-[#d98ba3]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line
                  x1="21"
                  y1="21"
                  x2="16.65"
                  y2="16.65"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder={
                blok.search_placeholder ||
                "Search..."
              }
              className="w-full pl-10 pr-3 py-2 rounded border-2 border-[#d98ba3] bg-[#fefefeb0] focus:outline-none"
              disabled
            />
          </div>
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
