export default function robots() {
      const baseUrl = 'https://gruppuppgift-cms.vercel.app'
          return {
                rules: {
                        userAgent: '*',
                                allow: '/',
                                        disallow: '/global/',
                                              },
                                                    sitemap: `${baseUrl}/sitemap.xml`,
                                                        }
                                                          }