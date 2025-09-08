import { storyblokEditable } from "@storyblok/react";

export default function Teaser({
  blok,
  className = "",
}) {
  return (
    <div
      {...storyblokEditable(blok)}
      className={`teaser p-4 rounded-md text-center ${className}`}
    >
      <h2 className="text-[3rem] font-bold">
        {blok.headline}
      </h2>
      <p className="text-sm text-black mt-2">
        {blok.description}
      </p>
    </div>
  );
}
