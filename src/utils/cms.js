// src/utils/cms.js

import { apiPlugin, storyblokInit, getStoryblokApi } from "@storyblok/react/rsc";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
  use: [apiPlugin],
});

export const StoryBlokUtils = {
  // Hämta alla länkar (används i sitemap)
  getStaticPaths: async () => {
    const storyblokApi = getStoryblokApi();

    const res = await storyblokApi.get("cdn/links");
    const links = res.data.links;

    // Omvandla till slug-array
    const paths = Object.keys(links).map((key) => {
      const link = links[key];
      return {
        slug: link.slug.split("/"),
      };
    });

    return paths;
  },
};
