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
      <div className="max-w-5xl mx-auto flex flex-col gap-2 md:flex-row items-center px-4 py-2">
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
        <nav className="flex-1">
          <MenuItems items={menuData} />
        </nav>

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
