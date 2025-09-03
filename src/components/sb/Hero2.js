import { storyblokEditable } from "@storyblok/react/rsc";
import ProductCard from "./ProductCard";
import Teaser from "./Teaser";

export default function Hero2({ blok }) {
  const teaserBlok =
    Array.isArray(blok.Text) &&
    blok.Text.length > 0
      ? blok.Text.find(
          (b) => b.component === "teaser"
        )
      : null;
  if (
    !blok.products ||
    !Array.isArray(blok.products) ||
    blok.products.length === 0
  )
    return null;

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative py-12 text-center"
    >
      {/* Teaser */}
      {teaserBlok &&
        (teaserBlok.headline ||
          teaserBlok.description) && (
          <Teaser blok={teaserBlok} />
        )}
      {/* Button */}
      {blok.button_label && blok.button_url && (
        <div className="flex justify-center mb-8">
          <a
            href={blok.button_url}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            {blok.button_label}
          </a>
        </div>
      )}
      {/* Product Cards Row */}
      <div className="flex justify-center items-end gap-6 max-w-4xl mx-auto">
        {blok.products
          .slice(0, 3)
          .map((product, idx) => (
            <div
              key={product.uuid || idx}
              className={`transition-all duration-300 relative z-10
              ${
                idx === 1
                  ? "-mb-6 scale-110"
                  : "mb-0 scale-100"
              }
              hover:z-20 hover:scale-125
            `}
              style={{
                transitionProperty:
                  "transform, z-index, margin-bottom",
              }}
            >
              <ProductCard
                blok={product.content}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
