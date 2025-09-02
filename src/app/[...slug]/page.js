// src/app/[...slug]/page.js
import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import { notFound } from "next/navigation";

export const revalidate = 0;            // viktigt för preview
export const dynamic = "force-dynamic"; // viktigt för preview

export default async function Page({ params: paramsPromise }) {
  const { slug = [] } = await paramsPromise;

  const path = Array.isArray(slug) ? slug.join("/") : String(slug || "home");

  const sbApi = getStoryblokApi();
  try {
    const { data } = await sbApi.get(`cdn/stories/${path}`, { version: "draft" });
    if (!data?.story) return notFound();

    return <StoryblokStory story={data.story} />;
  } catch {
    return notFound();
  }
}
