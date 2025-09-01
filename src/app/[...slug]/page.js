//Example of a dynamic page ex
// about-us, blog/post-title, contact-us, etc.

import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  try {
    const { slug } = params;
    const { data } = await fetchData(slug);
    if (!data?.story) return notFound();
    return (
      <div>
        <StoryblokStory story={data.story} />
      </div>
    );
  } catch (error) {
    return notFound();
  }
}

export async function fetchData(slug) {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(
    `cdn/stories/${slug.join("/")}`,
    {
      version: "draft",
    }
  );
}
