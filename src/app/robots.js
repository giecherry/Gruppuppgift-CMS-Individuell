// src/app/robots.js

import SETTINGS from "@/settings";

/**
 * Denna funktion exporteras av Next.js automatiskt som /robots.txt
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",    // Gäller alla bots
        allow: "/",        // Tillåt allt
        disallow: "/api/", // Blockera API
      },
    ],
    sitemap: `${SETTINGS.SITE_URL}/sitemap.xml`, // Pekar på sitemap
  };
}
