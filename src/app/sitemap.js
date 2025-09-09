// src/app/sitemap.js

import { StoryBlokUtils } from "@/utils/cms";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default async function sitemap() {
  try {
    const pages = (await StoryBlokUtils.getStaticPaths()).filter(
      (path) => path?.slug?.[0] !== "config" // Ta bort ev. interna sidor
    );

    const sitemap = pages.map((page) => {
      const slug = page?.slug?.filter((item) => item !== ""); // Rensa tomma slug-delar
      const finalSlug = slug?.length > 0 ? slug.join("/") : ""; // Bygg slug som tex: "about/team"

      return {
        url: `${siteUrl}/${finalSlug}`, // Fullständig URL
        lastModified: new Date(),       // Nuvarande datum
        priority: 1.0                   // Vikt (för sökmotorer)
      };
    });

    return sitemap;
  } catch (error) {
    console.error("Sitemap generation failed", error);
    return [];
  }
}
