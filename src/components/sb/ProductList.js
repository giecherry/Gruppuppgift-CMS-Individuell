import { storyblokEditable } from "@storyblok/react/rsc";
import ProductCard from "./ProductCard";

export default function ProductList({ blok }) {
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
        <ProductCard
          blok={product.content}
          key={product.uuid || idx}
        />
      ))}
    </div>
  );
}
