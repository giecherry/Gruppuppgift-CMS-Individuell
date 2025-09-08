import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function Hero({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-gray p-6"
      style={{
        backgroundImage: blok?.background_image
          ?.filename
          ? `url(${blok.background_image.filename})`
          : undefined,
      }}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h1 className="text-center text-[3rem] font-bold pt-12 mb-4 text-[#333] font-sans">
          {blok.title}
        </h1>
        <h4 className="text-center text-sm text-black mt-2 w-7/10 mx-auto">
          {blok.text}
        </h4>
        {blok.button?.cached_url && (
          <Link
            href={`/${blok.button.cached_url}`}
            target={blok.button.target || "_self"}
            className="block text-center border border-black text-black bg-transparent px-12 py-2 rounded-none hover:bg-black hover:text-white transition mt-4 mb-6 mx-auto w-40 font-bold whitespace-nowrap"
          >
            {blok.button.name || "Shop All"}
          </Link>
        )}
        {blok.image?.filename && (
          <img
            src={blok.image.filename}
            alt={blok.image.alt || "Hero image"}
            className="mx-auto w-full h-auto py-12"
          />
        )}
      </div>
    </div>
  );
}
