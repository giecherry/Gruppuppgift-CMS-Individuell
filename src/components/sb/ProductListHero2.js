import { storyblokEditable } from "@storyblok/react/rsc";
import ProductCardHero2 from "./ProductCardHero2";

export default function ProductListHero2({ blok }) {
  if (
    !blok.products ||
    !Array.isArray(blok.products)
  )
    return null;
  return (
    <div
      {...storyblokEditable(blok)}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {blok.products.map((product, idx) => (
        <ProductCardHero2
          blok={product.content}
          key={product.uuid || idx}
        />
      ))}
    </div>
  );
}
