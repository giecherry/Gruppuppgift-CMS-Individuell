import {
  apiPlugin,
  storyblokInit,
} from "@storyblok/react/rsc";

import Page from "@/components/sb/Page";
import Teaser from "@/components/sb/Teaser";
import Feature from "@/components/sb/Feature";
import Grid from "@/components/sb/Grid";
import DoesNotExist from "@/components/sb/DoesNotExist";
import Hero from "@/components/sb/Hero";
import Link from "@/components/sb/Link";
import Footer from "@/components/sb/Footer";
import Header from "@/components/sb/Header";

import ProductPage from "@/components/sb/ProductPage";
import ProductCard from "@/components/sb/ProductCard";
import ProductList from "@/components/sb/ProductList";
import Hero2 from "@/components/sb/Hero2";

export const components = {
  page: Page,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  hero: Hero,
  doesNotExist: DoesNotExist,
  link: Link,
  footer: Footer,
  header: Header,
  Products: ProductPage,
  ProductCard: ProductCard,
  ProductList: ProductList,
  Hero2: Hero2,
};

/**
 * Get the Storyblok API exports a StoryblokApi object to be used in the application
 * @returns {StoryblokApi}
 */
export const getStoryblokApi = storyblokInit({
  accessToken:
    process.env
      .STORYBLOK_DELIVERY_API_ACCESS_TOKEN ||
    process.env
      .NEXT_PUBLIC_STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});
