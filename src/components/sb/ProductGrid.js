import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function ProductGrid({ blok }) {
  const cols = String(blok.layout_columns || "4");
  let colClass = "md:grid-cols-3";
  if (cols === "2") colClass = "md:grid-cols-2";
  if (cols === "4") colClass = "md:grid-cols-4";

  const items = Array.isArray(blok.products) ? blok.products : [];

  return (
    <section {...storyblokEditable(blok)} className="py-8 px-6 bg-rose-50">
      <div className={`grid gap-6 grid-cols-1 sm:grid-cols-2 ${colClass}`}>
        {items.map((p) => {
          const c = p.content || {};
          const img = c.productImages?.[0]?.filename || c.image?.filename;
          const alt = c.productImages?.[0]?.alt || c.productName || c.title || p.name;

          return (
            <Link
              key={p.uuid}
              href={`/${p.full_slug}`}
              className="group block rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-full aspect-square overflow-hidden rounded-t-xl bg-gray-100">
                {img && (
                  <img
                    src={img}
                    alt={alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>

              <div className="p-3">
                <div className="font-medium leading-tight truncate text-black">
                  {c.productName || c.title || p.name}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  {blok.show_size && c.sizes?.[0] && (
                    <span className="text-xs text-black">{c.sizes[0]}</span>
                  )}
                  {blok.show_price && c.price && (
                    <span className="text-sm font-semibold text-black">${c.price}</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}