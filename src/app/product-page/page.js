import { getStoryblokApi } from "@storyblok/react/rsc";
import Header from "@/components/sb/Header";
import ProductPage from "@/components/sb/ProductPage";

export default async function Page() {
  const sbApi = getStoryblokApi();
  const [{ data: productData }, { data: headerData }] = await Promise.all([
    sbApi.get("cdn/stories/product-page", { version: "draft" }),
    sbApi.get("cdn/stories/config", { version: "draft" }),
  ]);
  const blok = productData.story.content;
  const headerBlok = headerData.story.content;

  return (
    <>
      <Header blok={headerBlok} className="bg-black text-white" />
      <ProductPage blok={blok} />
    </>
  );
}