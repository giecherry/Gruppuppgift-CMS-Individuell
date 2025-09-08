// src/app/robots.js

import SETTINGS from "@/settings";

/**
 * Denna fil används av Next.js automatiskt för att generera /robots.txt
 */
export default function robots() {
  return {
    // Regler för alla sökmotorer
    rules: {
      userAgent: "*",        // Gäller alla bots
      allow: "/*",           // Tillåt alla sidor
      disallow: "/api/",     // Blockera API-routes (om du har några)
    },
    // Pekar till din sitemap
    sitemap: `${SETTINGS.SITE_URL}/sitemap.xml`,
  };
}
