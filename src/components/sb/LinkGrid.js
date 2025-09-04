import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "./Link";

export default function LinkGrid({ blok }) {
  if (!blok || !blok.links) return null;
  const direction =
    blok.direction === "row"
      ? "flex-row"
      : "flex-col";
  return (
    <div
      {...storyblokEditable(blok)}
      className={`flex ${direction} gap-2 text-black`}
    >
      {blok.title && (
        <div className="font-bold mb-2">
          {blok.title}
        </div>
      )}
      {blok.links.map((linkBlok, idx) => (
        <Link
          blok={linkBlok}
          key={linkBlok._uid || idx}
        />
      ))}
    </div>
  );
}
