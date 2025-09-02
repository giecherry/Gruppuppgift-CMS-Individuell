import { renderRichText } from "@storyblok/react/rsc";

const COLOR_MAP = {
  camel: "#D59A6A",
  black: "#000000",
  brown: "#8B5A2B",
  red: "#E11D48",
};

export default function ProductPage({ blok }) {
  /** ----- Fält & fallbacks (namn enl. din skärmdump) ----- */
  const title =
    blok.productName || blok.productname || blok.title || "";

  // Bilder: productImages (Multi-Assets) med fallback
  const rawImages = blok.productImages ?? blok.images ?? blok.pictures;
  const images = Array.isArray(rawImages)
    ? rawImages.filter((i) => i?.filename)
    : rawImages?.filename
    ? [rawImages]
    : [];

  const main = images[0];
  const mainUrl = main?.filename;
  const mainAlt = main?.alt || title;

  // Pris → "1 299 kr" (utan ören) + fallback om redaktören skrivit "869" som text
  const rawPrice = Number(blok.price);
  const priceText = Number.isFinite(rawPrice)
    ? new Intl.NumberFormat("sv-SE", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(rawPrice) + " kr"
    : (blok.price
        ? (String(blok.price).toLowerCase().includes("kr")
            ? String(blok.price)
            : String(blok.price) + " kr")
        : "");

  const description = blok.description;

  // Size & fit-länk (Link field)
  const sizeGuide = blok.size_and_fit_link;
  const sizeHref =
    sizeGuide?.url ||
    (sizeGuide?.cached_url ? `/${sizeGuide.cached_url}` : undefined);
  const sizeTarget = sizeGuide?.target;

  // Köp-länk: om buy_button råkar vara Link → funkar; annars visas en "disabled" knapp
  const buy = blok.buy_button;
  const buyHref = buy?.url || (buy?.cached_url ? `/${buy.cached_url}` : undefined);
  const buyTarget = buy?.target;

  return (
    <div className="max-w-6xl mx-auto py-10 bg-white text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Bildkolumn */}
        <div className="space-y-4">
          {mainUrl && (
            <img
              src={mainUrl}
              alt={mainAlt}
              className="aspect-square w-full object-cover rounded-lg"
            />
          )}

          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {images.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img.filename}
                  alt={img.alt || `${title} ${i + 2}`}
                  className="aspect-square w-full object-cover rounded-md cursor-pointer hover:opacity-90"
                />
              ))}
            </div>
          )}
        </div>

        {/* Info-kolumn */}
        <div className="space-y-4">
          {title && <h1 className="text-2xl font-semibold">{title}</h1>}
          {priceText && <div className="text-xl">{priceText}</div>}

          {/* Beskrivning – stöd både för Textarea (string) och ev. Richtext */}
          {description && (
            typeof description === "object" && (description.type || description.content)
              ? <div className="prose prose-neutral">{renderRichText(description)}</div>
              : <p className="text-sm leading-relaxed">{String(description)}</p>
          )}

          {/* Färger */}
          {Array.isArray(blok.colors) && blok.colors.length > 0 && (
            <div>
              <div className="text-sm mb-2">Color</div>
              <div className="flex gap-2">
                {blok.colors.map((c) => (
                  <span
                    key={c}
                    className="h-6 w-6 rounded-full border border-neutral-300 cursor-pointer hover:ring-1 hover:ring-neutral-900"
                    style={{ background: COLOR_MAP[c] || "#eee" }}
                    title={c}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Storlekar (visuella, ej interaktiva men ser klickbara ut) */}
          {Array.isArray(blok.sizes) && blok.sizes.length > 0 && (
            <div>
              <div className="text-sm mb-2">Size</div>
              <div className="flex flex-wrap gap-2">
                {blok.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    aria-disabled="true"
                    className="px-3 py-1 border rounded border-neutral-300 bg-white text-black cursor-pointer hover:bg-neutral-100"
                    title="Display only"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size & fit guide-länk */}
          {sizeHref && (
            <a
              href={sizeHref}
              target={sizeTarget}
              rel={sizeTarget === "_blank" ? "noopener noreferrer" : undefined}
              className="inline-block text-sm underline underline-offset-4 hover:opacity-80 cursor-pointer"
            >
              Size &amp; Fit Guide
            </a>
          )}

          {/* Köp-knapp */}
          {buyHref ? (
            <a
              href={buyHref}
              target={buyTarget}
              rel={buyTarget === "_blank" ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl
                         bg-white text-black border border-neutral-900 hover:bg-neutral-100 cursor-pointer"
            >
              Köp
            </a>
          ) : (
            <button
              type="button"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl
                         bg-white text-black border border-neutral-300 opacity-60 cursor-not-allowed"
              title="Ingen köplänk satt i Storyblok"
            >
              Köp
            </button>
          )}

          {/* Modellinfo (du har bara model_size i detta schema) */}
          {blok.model_size && (
            <p className="text-sm text-neutral-800">{blok.model_size}</p>
          )}
        </div>
      </div>
    </div>
  );
}
