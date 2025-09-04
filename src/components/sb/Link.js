import { storyblokEditable } from "@storyblok/react/rsc";
import NextLink from "next/link";

export default function Link({ blok }) {
  if (!blok?.url) return null;

  const href = blok.url.cached_url || "#";
  const isExternal =
    blok.url.linktype === "url" &&
    !href.startsWith("/");

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
      className="hover:underline text-sm"
    >
      {blok.label || href}
    </NextLink>
  );
}
