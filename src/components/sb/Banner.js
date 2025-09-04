// components/Banner.js
import { storyblokEditable } from "@storyblok/react";

export default function Banner({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full h-64"
    >
      <img
        src={blok.banner_image?.filename}
        alt={blok.banner_image?.alt || "Banner image"}
        className=" w-full h-full fill"
      />
      {(blok.headline || blok.subheadline) && (
        <div className="flex flex-col items-center justify-center text-white bg-black bg-opacity-30">
          {blok.headline && <h2 className="text-4xl font-bold">{blok.headline}</h2>}
          {blok.subheadline && <p className="mt-2 text-lg">{blok.subheadline}</p>}
        </div>
      )}
    </div>
  );
}
