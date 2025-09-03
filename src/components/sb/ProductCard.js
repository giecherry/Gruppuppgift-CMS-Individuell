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
      <div className="w-full text-center">
        <h3 className="font-bold text-lg mb-1">
          {blok.productName}
        </h3>
        <div className="text-blue-700 font-semibold text-xl mb-1">
          {typeof blok.price === "number"
            ? `${blok.price} kr`
            : blok.price}
        </div>
        {blok.sizes && blok.sizes.length > 0 && (
          <div className="text-xs text-gray-600 mb-1">
            Sizes: {blok.sizes.join(", ")}
          </div>
        )}
        {blok.buy_button && (
          <div className="mt-2">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-xs">
              {blok.buy_button}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
