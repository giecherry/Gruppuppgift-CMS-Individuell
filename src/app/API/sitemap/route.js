// src/app/api/sitemap/route.js

/**
 * Den här API-routen genererar dynamiskt en sitemap.xml
 * Sitemap används av sökmotorer för att hitta alla sidor.
 * Den hämtar sidor från Storyblok via Links API.
 */

import axios from 'axios';

export async function GET() {
  // Hämta miljövariabler från .env.local
  const token = process.env.STORYBLOK_DELIVERY_API_ACCESS_TOKEN;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Kolla att båda variablerna finns
  if (!token || !siteUrl) {
    return new Response('Missing environment variables', { status: 500 });
  }

  try {
    // Hämta alla länkar (sidor) från Storyblok
    const response = await axios.get('https://api.storyblok.com/v2/cdn/links/', {
      params: {
        token,
      },
    });

    const links = response.data.links;

    // Skapa en lista av sidor (filtrera bort mappar och startsida)
    const pages = Object.values(links)
      .filter((link) => !link.is_folder && link.slug !== 'home')
      .map((link) => {
        return `
  <url>
    <loc>${siteUrl}/${link.slug}</loc>
    <lastmod>${new Date(link.published_at || new Date()).toISOString()}</lastmod>
  </url>`;
      });

    // Lägg till startsidan också
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  ${pages.join('\n')}
</urlset>`;

    // Skicka tillbaka XML
    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Sitemap generation failed:', error);
    return new Response('Failed to generate sitemap', { status: 500 });
  }
}
