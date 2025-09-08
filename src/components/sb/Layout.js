import { getStoryblokApi } from "@/lib/storyblok";
import Header from "./Header";
import Footer from "./Footer";

export default async function Layout({ children, pathName }) {
  const data = await fetchConfigSafe();

  const content = data?.story?.content;
  const headerBlok = Array.isArray(content?.header) ? content.header[0] : content?.header;
  const footerBlok = Array.isArray(content?.footer) ? content.footer[0] : content?.footer;

  console.log(pathName)

  const x = pathName.startsWith("/products")


  return (
    <>
      {headerBlok ? <Header blok={headerBlok} darkNavbar={x} /> : <Header blok={{}} />}
      {children}
      {!x && (footerBlok ? <Footer blok={footerBlok} /> : <Footer blok={{}} />)}
    </>
  );
}

async function fetchConfigSafe() {
  const sb = getStoryblokApi();
  try {
    const { data } = await sb.get("cdn/stories/config-page", { version: "draft" });
    return data;
  } catch {
    try {
      const { data } = await sb.get("cdn/stories/config-page", { version: "published" });
      return data;
    } catch {
      return null;
    }
  }
}




/* import { getStoryblokApi } from "@/lib/storyblok";
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
} */
