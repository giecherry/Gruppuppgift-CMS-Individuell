import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Page({ params }) {
  const slug = Array.isArray(params?.slug) ? params.slug.join("/") : "home";
  const sbApi = getStoryblokApi();

  const data = await fetchStory(sbApi, slug);
  if (!data?.story) return notFound();

  const root = data.story?.content?.component;

  if (root === "config") {
    return null;
  }

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

async function fetchStory(sbApi, slug) {
  try {
    const { data } = await sbApi.get(`cdn/stories/${slug}`, { version: "draft" });
    return data;
  } catch {
    try {
      const { data } = await sbApi.get(`cdn/stories/${slug}`, { version: "published" });
      return data;
    } catch {
      return null;
    }
  }
}


/* //Example of a dynamic page ex
// about-us, blog/post-title, contact-us, etc.

import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
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
    const { slug } = await params;
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
 */
