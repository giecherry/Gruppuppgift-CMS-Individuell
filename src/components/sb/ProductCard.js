import { storyblokEditable } from "@storyblok/react/rsc";
import NextLink from "next/link";

export default function ProductCard({ blok }) {
  if (!blok) return null;
  const mainImage =
    Array.isArray(blok.productImages) &&
    blok.productImages[0];

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white rounded shadow p-4 flex flex-col items-center max-w-xs"
    >
      {mainImage && mainImage.filename && (
        <img
          src={mainImage.filename}
          alt={blok.productName || "Product"}
          className="w-full h-48 object-cover rounded mb-2"
        />
      )}
    </div>
  );
}
