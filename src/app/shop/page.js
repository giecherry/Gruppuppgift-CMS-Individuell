import "@/lib/storyblok";
import { getStoryblokApi, StoryblokServerComponent } from "@storyblok/react/rsc";

export default async function ShopPage() {
  const api = getStoryblokApi();
  const { data } = await api.get("cdn/stories/shop", {
    version: "draft",
    resolve_relations: "product_grid.products",
  });

  return <StoryblokServerComponent blok={data.story.content} />;
}