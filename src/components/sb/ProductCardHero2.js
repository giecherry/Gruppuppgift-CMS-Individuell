import { storyblokEditable } from "@storyblok/react/rsc";
import NextLink from "next/link";

export default function ProductCardHero2({
  blok,
}) {
  if (!blok) return null;
  const mainImage =
    Array.isArray(blok.productImages) &&
    blok.productImages[0];

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white rounded p-4 flex flex-col items-center w-full h-full shadow-[#eab5c2] shadow-md"
    >
      {mainImage && mainImage.filename && (
        <img
          src={mainImage.filename}
          alt={blok.productName || "Product"}
          className="w-full h-full object-cover rounded mb-2"
        />
      )}
    </div>
  );
}
