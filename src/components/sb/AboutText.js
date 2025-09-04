import {
  storyblokEditable,
  StoryblokRichText,
} from "@storyblok/react";

export default function AboutText({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="about-text mx-auto my-12 bg-white/80 rounded-lg p-10 text-justify w-full max-w-3xl"
      style={{ width: "70%" }}
    >
      {blok.Title && (
        <h2 className="text-3xl font-bold mb-6 text-center">
          {blok.Title}
        </h2>
      )}
      {blok.Content && (
        <div className="max-w-none prose dark:prose-invert">
          <StoryblokRichText doc={blok.Content} />
        </div>
      )}
    </div>
  );
}
