import { storyblokEditable } from "@storyblok/react/rsc";
import NextLink from "next/link";

export default function Link({
  blok,
  whiteText,
}) {
  if (!blok?.url) return null;

  let href = blok.url.cached_url || "#";
  const isExternal =
    blok.url.linktype === "url" &&
    !href.startsWith("/");

  if (!isExternal && !href.startsWith("/")) {
    href = "/" + href;
  }

  return (
    <NextLink
      {...storyblokEditable(blok)}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={
        isExternal
          ? "noopener noreferrer"
          : undefined
      }
      className="text-sm hover:text-[#d98ba3] hover:font-extrabold"
    >
      {blok.label || href}
    </NextLink>
  );
}
