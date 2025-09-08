import { storyblokEditable } from "@storyblok/react/rsc";
import NextLink from "next/link";

export default function ProductCardHero2({
  blok,
}) {
  if (!blok) return null;
  const mainImage =
    Array.isArray(blok.content.productImages) &&
    blok.content.productImages[0];

  // Use full_slug or slug for the product link
  const productSlug = blok.full_slug
    ? `/${blok.full_slug}`
    : blok.slug
    ? `/${blok.slug}`
    : "#";

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white rounded p-4 flex flex-col items-center w-full h-full shadow-[#eab5c2] shadow-md"
    >
      {mainImage && mainImage.filename && (
        <NextLink href={productSlug}>
          <img
            src={mainImage.filename}
            alt={
              blok.content.productName ||
              "Product"
            }
            className="w-full h-full object-cover rounded mb-2 cursor-pointer"
          />
        </NextLink>
      )}
    </div>
  );
}
