"use client";

export default function Hero3({ blok }) {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-2 text-black">{blok.title}</h2>
      <p className="text-black mb-6">{blok.intro}</p>

      <div className="flex gap-3 flex-wrap">
        {blok.show_all && (
          <button className="px-4 py-2 rounded border bg-black text-white hover:bg-pink-600 hover:border-pink-600 transition">
            All categories
          </button>
        )}

        {Array.isArray(blok.categories) &&
          blok.categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded border bg-white text-black hover:bg-pink-100 hover:border-pink-400 hover:text-pink-600 transition"
            >
              {cat}
            </button>
          ))}
      </div>
    </section>
  );
}