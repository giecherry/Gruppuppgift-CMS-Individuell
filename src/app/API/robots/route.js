// src/app/api/robots/route.js

/**
 * Den här API-routen skapar en dynamisk robots.txt
 * som används av sökmotorer (t.ex. Googlebot).
 * 
 * Om du är i "production" miljö => Tillåt crawl
 * Om du är i "development" => Blockera allt
 */

export async function GET() {
  // Kollar om vi är i produktionsmiljö
  const isProd = process.env.NODE_ENV === 'production';

  // Innehållet i robots.txt
  const content = isProd
    ? `User-agent: *\nAllow: /\nSitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`
    : `User-agent: *\nDisallow: /`;

  // Skicka tillbaka som "text/plain"
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
