import { getStoryblokApi } from "@/lib/storyblok";
import Header from "./Header";
import Footer from "./Footer";

export default async function Layout({
  children,
}) {
  const { data } = await fetchData();

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(
    "cdn/stories/config-page",
    {
      version: "draft",
    }
  );
}
